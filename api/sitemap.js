import { getAllPosts } from '../lib/blog.js';

const STATIC_ROUTES = [
  { path: '/', priority: '1.0', freq: 'weekly' },
  { path: '/services', priority: '0.9', freq: 'monthly' },
  { path: '/about', priority: '0.6', freq: 'monthly' },
  { path: '/service-area', priority: '0.6', freq: 'monthly' },
  { path: '/contact', priority: '0.7', freq: 'monthly' },
  { path: '/blog', priority: '0.8', freq: 'daily' },
  { path: '/privacy-policy', priority: '0.2', freq: 'yearly' },
  { path: '/terms', priority: '0.2', freq: 'yearly' },
];

function urlTag(loc, { lastmod, priority, freq } = {}) {
  return [
    '  <url>',
    `    <loc>${loc}</loc>`,
    lastmod ? `    <lastmod>${lastmod}</lastmod>` : '',
    freq ? `    <changefreq>${freq}</changefreq>` : '',
    priority ? `    <priority>${priority}</priority>` : '',
    '  </url>',
  ].filter(Boolean).join('\n');
}

export default async function handler(req, res) {
  const site = (process.env.SITE_URL || 'https://moonriverconstructionco.com').replace(/\/$/, '');
  let posts = [];
  try {
    posts = await getAllPosts();
  } catch {
    posts = [];
  }

  const urls = [
    ...STATIC_ROUTES.map((r) => urlTag(site + r.path, { priority: r.priority, freq: r.freq })),
    ...posts.map((p) =>
      urlTag(`${site}/blog/${p.slug}`, {
        lastmod: (p.date || new Date().toISOString()).slice(0, 10),
        priority: '0.7',
        freq: 'monthly',
      })
    ),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`;

  res.setHeader('Content-Type', 'application/xml');
  res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400');
  return res.status(200).send(xml);
}
