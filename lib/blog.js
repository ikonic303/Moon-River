import { Redis } from '@upstash/redis';
import { isMergedPost } from './blog-merges.js';

// Reads UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN from env.
// Created on first use, not at import: routes.jsx pulls this module into the browser bundle,
// where process.env does not exist, and Redis.fromEnv() at import time threw on every page
// load. That error stopped the React app from starting (no mobile menu, no form resizing).
// In the browser the blog loaders return before touching Redis, so it is never created there.
let client;
export function getRedis() {
  if (!client) client = Redis.fromEnv();
  return client;
}

// Namespaced with "mrc:" — this Upstash instance is shared with other Ikonic-managed
// projects, and the old unprefixed "blog:*" keys were colliding with another project's
// post index. Do not remove the prefix.
const POST_KEY = (slug) => `mrc:blog:post:${slug}`;
const SLUGS_KEY = 'mrc:blog:slugs';

export function slugify(str = '') {
  return String(str)
    .toLowerCase()
    .normalize('NFKD').replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '')
    .slice(0, 80);
}

export function readTime(html = '') {
  const words = String(html).replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

export async function slugExists(slug) {
  return (await getRedis().exists(POST_KEY(slug))) === 1;
}

// Ensure a unique slug by appending -2, -3, ... if needed.
export async function uniqueSlug(base) {
  let slug = slugify(base) || `post-${Date.now()}`;
  let n = 2;
  while (await slugExists(slug)) {
    slug = `${slugify(base)}-${n++}`;
  }
  return slug;
}

export async function savePost(post) {
  await getRedis().set(POST_KEY(post.slug), post);
  await getRedis().sadd(SLUGS_KEY, post.slug);
  return post;
}

export async function getPost(slug) {
  if (!slug) return null;
  // Retired duplicates (see blog-merges.js) are redirected in vercel.json; never serve them.
  if (isMergedPost(slug)) return null;
  return await getRedis().get(POST_KEY(slug));
}

export async function getAllPosts({ includeDrafts = false } = {}) {
  const slugs = await getRedis().smembers(SLUGS_KEY);
  if (!slugs || slugs.length === 0) return [];
  const keys = slugs.map(POST_KEY);
  const posts = (await getRedis().mget(...keys)).filter(Boolean);
  return posts
    .filter((p) => includeDrafts || p.status === 'published')
    .filter((p) => !isMergedPost(p.slug))
    .sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));
}
