import { savePost, uniqueSlug, slugify, readTime } from '../lib/blog.js';

// ---- Topic pool (construction / Brighton, CO) -----------------------------
const TOPICS = [
  // Concrete & Hardscapes
  { category: 'Concrete & Hardscapes', topic: 'How to tell when a concrete driveway needs repair vs. replacement' },
  { category: 'Concrete & Hardscapes', topic: 'Stamped vs. broom-finished concrete patios: which is right for your yard' },
  { category: 'Concrete & Hardscapes', topic: 'Protecting concrete from Colorado freeze-thaw damage' },
  { category: 'Concrete & Hardscapes', topic: 'What goes into a properly built retaining wall' },
  { category: 'Concrete & Hardscapes', topic: 'Concrete control joints explained: why and where they go' },

  // Landscaping & Outdoor Living
  { category: 'Landscaping & Outdoor Living', topic: 'Best time of year to install sod in Colorado' },
  { category: 'Landscaping & Outdoor Living', topic: 'Artificial turf vs. natural grass for Front Range yards' },
  { category: 'Landscaping & Outdoor Living', topic: 'Planning a low-water, low-maintenance landscape in Brighton' },
  { category: 'Landscaping & Outdoor Living', topic: 'Designing a backyard deck and outdoor living space' },
  { category: 'Landscaping & Outdoor Living', topic: 'Common sprinkler problems and how to spot them early' },

  // Interior Remodeling
  { category: 'Interior Remodeling', topic: 'Kitchen remodel planning: budget, layout, and timeline basics' },
  { category: 'Interior Remodeling', topic: 'Small bathroom remodel ideas that add real value' },
  { category: 'Interior Remodeling', topic: 'Finishing a basement: permits, egress, and layout in Colorado' },
  { category: 'Interior Remodeling', topic: 'LVP vs. tile vs. hardwood: choosing the right flooring' },
  { category: 'Interior Remodeling', topic: 'Interior painting prep that makes a finish last' },

  // Home Maintenance & Seasonal
  { category: 'Home Maintenance & Seasonal', topic: 'Fall home maintenance checklist for Colorado homeowners' },
  { category: 'Home Maintenance & Seasonal', topic: 'Winterizing your sprinkler system before the first freeze' },
  { category: 'Home Maintenance & Seasonal', topic: 'Spring property cleanup and curb-appeal upgrades' },
  { category: 'Home Maintenance & Seasonal', topic: 'How to choose a reliable local contractor in the Brighton area' },
  { category: 'Home Maintenance & Seasonal', topic: 'Questions to ask before hiring a concrete or remodeling crew' },
];

const BUSINESS = {
  name: 'Moon River Construction',
  area: 'Brighton, Colorado and surrounding Front Range communities',
  phone: '(303) 901-0048',
};

const MODEL = 'gemini-2.5-flash';
const GEMINI_URL = (key) =>
  `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${key}`;

function buildPrompt({ category, topic }) {
  return `You are an expert SEO content writer for ${BUSINESS.name}, a local construction and home-services company serving ${BUSINESS.area}.

Write a helpful, original blog article on this topic:
"${topic}" (category: ${category}).

Requirements:
- 700-1000 words, written for homeowners and property managers (clear, practical, trustworthy — not salesy or spammy).
- Locally relevant to ${BUSINESS.area} and the Colorado climate where it makes sense.
- Use semantic HTML for the body: <h2>, <h3>, <p>, <ul>/<li>, <strong>. Do NOT include <h1>, <html>, <head>, <body>, inline styles, or markdown fences.
- Include a short, natural closing call-to-action mentioning ${BUSINESS.name} and the phone number ${BUSINESS.phone}.
- Avoid making up specific prices, guarantees, certifications, or fake statistics.

Return ONLY a JSON object with exactly these fields:
{
  "title": "compelling, specific, <= 65 characters",
  "slug": "url-friendly-kebab-case-from-title",
  "excerpt": "1-2 sentence meta description, <= 155 characters",
  "content": "the full article body as clean HTML",
  "category": "${category}",
  "tags": ["3-6 short lowercase tag strings"]
}`;
}

async function callGemini(key, prompt) {
  const res = await fetch(GEMINI_URL(key), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
      generationConfig: {
        temperature: 0.9,
        maxOutputTokens: 4096,
        responseMimeType: 'application/json',
      },
    }),
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Gemini ${res.status}: ${body.slice(0, 300)}`);
  }
  const data = await res.json();
  const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) throw new Error('Gemini returned no text');
  return JSON.parse(text);
}

async function notify(post, siteUrl) {
  const key = process.env.RESEND_API_KEY;
  const to = process.env.BLOG_NOTIFY_EMAIL;
  const from = process.env.BLOG_FROM_EMAIL;
  if (!key || !to || !from) return false; // notifications optional
  const url = `${siteUrl}/blog/${post.slug}`;
  try {
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from,
        to,
        subject: `✅ New Blog Post Live: ${post.title}`,
        html: `<div style="font-family:Arial,sans-serif">
          <h2>✅ New Blog Post Live</h2>
          <p><strong>${post.title}</strong></p>
          <p style="color:#555">${post.excerpt}</p>
          <p><em>${post.category}</em></p>
          <p><a href="${url}" style="display:inline-block;background:#2E9D5C;color:#fff;padding:10px 18px;border-radius:6px;text-decoration:none">View Live Post</a></p>
          <p style="color:#888;font-size:12px">${url}</p>
        </div>`,
      }),
    });
    return true;
  } catch {
    return false;
  }
}

function authorized(req) {
  const secret = process.env.CRON_SECRET;
  if (!secret) return false;
  const header = req.headers?.authorization || '';
  if (header === `Bearer ${secret}`) return true;
  const q = req.query?.secret;
  return q && q === secret;
}

export default async function handler(req, res) {
  if (!authorized(req)) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'GEMINI_API_KEY not configured' });

  const siteUrl = (process.env.SITE_URL || 'https://www.moonriverconstructionco.com').replace(/\/$/, '');
  const pick = TOPICS[Math.floor(Math.random() * TOPICS.length)];

  let lastErr;
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const gen = await callGemini(apiKey, buildPrompt(pick));
      if (!gen?.title || !gen?.content) throw new Error('Incomplete generation');

      const slug = await uniqueSlug(gen.slug || gen.title);
      const post = {
        title: String(gen.title).trim(),
        slug,
        excerpt: String(gen.excerpt || '').trim(),
        content: String(gen.content).trim(),
        category: gen.category || pick.category,
        tags: Array.isArray(gen.tags) ? gen.tags.slice(0, 6).map((t) => slugify(t)).filter(Boolean) : [],
        status: 'published',
        date: new Date().toISOString(),
        readTime: readTime(gen.content),
        author: BUSINESS.name,
      };

      await savePost(post);
      const emailed = await notify(post, siteUrl);

      return res.status(200).json({
        ok: true, slug: post.slug, title: post.title, category: post.category,
        url: `${siteUrl}/blog/${post.slug}`, emailed, attempt,
      });
    } catch (err) {
      lastErr = err;
      await new Promise((r) => setTimeout(r, attempt * 800)); // backoff
    }
  }
  return res.status(502).json({ error: 'Generation failed', detail: String(lastErr?.message || lastErr) });
}
