import { getAllPosts } from '../lib/blog.js';

export default async function handler(req, res) {
  try {
    const posts = await getAllPosts();
    // List view: omit full HTML body to keep the payload light.
    const list = posts.map(({ content, ...meta }) => meta);
    res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=600');
    return res.status(200).json({ posts: list });
  } catch (err) {
    return res.status(500).json({ error: 'Failed to load posts', detail: String(err?.message || err) });
  }
}
