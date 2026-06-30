import { getPost } from '../lib/blog.js';

export default async function handler(req, res) {
  const slug = req.query?.slug;
  if (!slug) return res.status(400).json({ error: 'Missing slug' });
  try {
    const post = await getPost(String(slug));
    if (!post || post.status !== 'published') {
      return res.status(404).json({ error: 'Not found' });
    }
    res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=600');
    return res.status(200).json({ post });
  } catch (err) {
    return res.status(500).json({ error: 'Failed to load post', detail: String(err?.message || err) });
  }
}
