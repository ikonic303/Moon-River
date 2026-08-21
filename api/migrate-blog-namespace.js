import { Redis } from '@upstash/redis';

const redis = Redis.fromEnv();

// One-time recovery: the old, unprefixed "blog:post:*" keyspace is shared with
// another Ikonic-managed project, which had been overwriting the "blog:slugs" set.
// This scans every post under the old prefix, keeps only ones this site actually
// authored, and re-indexes them under the new "mrc:blog:*" namespace (see lib/blog.js).
// Purely additive: never reads or writes anything the other project owns beyond a GET.
const OLD_POST_PREFIX = 'blog:post:';
const NEW_SLUGS_KEY = 'mrc:blog:slugs';
const NEW_POST_KEY = (slug) => `mrc:blog:post:${slug}`;
const OWNER = 'Moon River Construction';

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

  const migrated = [];
  const skippedOwners = new Set();
  let cursor = '0';

  do {
    const result = await redis.scan(cursor, { match: `${OLD_POST_PREFIX}*`, count: 100 });
    cursor = String(result[0]);
    const keys = result[1] || [];

    for (const key of keys) {
      const slug = key.slice(OLD_POST_PREFIX.length);
      const post = await redis.get(key);
      if (post && post.author === OWNER) {
        await redis.set(NEW_POST_KEY(slug), post);
        await redis.sadd(NEW_SLUGS_KEY, slug);
        migrated.push(slug);
      } else if (post) {
        skippedOwners.add(post.author || 'unknown');
      }
    }
  } while (cursor !== '0');

  return res.status(200).json({
    ok: true,
    migratedCount: migrated.length,
    migrated,
    skippedOtherOwners: [...skippedOwners],
  });
}
