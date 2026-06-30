import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from './Header';
import CTA from './CTA';
import Footer from './Footer';

function fmtDate(d) {
  try { return new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }); }
  catch { return ''; }
}

// Set/replace a meta tag by name or property; returns the element.
function setMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) { el = document.createElement('meta'); el.setAttribute(attr, key); document.head.appendChild(el); }
  el.setAttribute('content', content);
  return el;
}

function applySeo(post) {
  const url = `${window.location.origin}/blog/${post.slug}`;
  const desc = post.excerpt || '';
  const prevTitle = document.title;
  document.title = `${post.title} | Moon River Construction`;

  setMeta('name', 'description', desc);
  setMeta('property', 'og:title', post.title);
  setMeta('property', 'og:description', desc);
  setMeta('property', 'og:type', 'article');
  setMeta('property', 'og:url', url);
  setMeta('name', 'twitter:card', 'summary');

  let canon = document.head.querySelector('link[rel="canonical"]');
  const createdCanon = !canon;
  if (!canon) { canon = document.createElement('link'); canon.setAttribute('rel', 'canonical'); document.head.appendChild(canon); }
  canon.setAttribute('href', url);

  const ld = document.createElement('script');
  ld.type = 'application/ld+json';
  ld.setAttribute('data-blog-ld', '1');
  ld.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: desc,
    datePublished: post.date,
    dateModified: post.date,
    author: { '@type': 'Organization', name: post.author || 'Moon River Construction' },
    publisher: { '@type': 'Organization', name: 'Moon River Construction' },
    mainEntityOfPage: url,
    articleSection: post.category,
  });
  document.head.appendChild(ld);

  return () => {
    document.title = prevTitle;
    if (createdCanon && canon.parentNode) canon.parentNode.removeChild(canon);
    if (ld.parentNode) ld.parentNode.removeChild(ld);
  };
}

const POST_CSS = `
.post-body { color:#33404A; font-size:18px; line-height:1.75; }
.post-body h2 { font-family:'Barlow Semi Condensed',sans-serif; font-weight:800; color:#102232; font-size:clamp(24px,3vw,32px); line-height:1.2; margin:38px 0 14px; }
.post-body h3 { font-family:'Barlow Semi Condensed',sans-serif; font-weight:700; color:#102232; font-size:clamp(20px,2.4vw,24px); margin:28px 0 10px; }
.post-body p { margin:0 0 18px; }
.post-body ul, .post-body ol { margin:0 0 18px; padding-left:22px; display:flex; flex-direction:column; gap:8px; }
.post-body li { line-height:1.65; }
.post-body a { color:#2E9D5C; font-weight:600; }
.post-body strong { color:#102232; }
`;

export default function Post({ phone }) {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [status, setStatus] = useState('loading'); // loading | ok | notfound | error

  useEffect(() => {
    let alive = true;
    setStatus('loading'); setPost(null);
    window.scrollTo(0, 0);
    fetch(`/api/post?slug=${encodeURIComponent(slug)}`)
      .then((r) => {
        if (r.status === 404) { if (alive) setStatus('notfound'); return null; }
        if (!r.ok) throw new Error();
        return r.json();
      })
      .then((d) => { if (alive && d?.post) { setPost(d.post); setStatus('ok'); } })
      .catch(() => { if (alive) setStatus('error'); });
    return () => { alive = false; };
  }, [slug]);

  useEffect(() => {
    if (post) return applySeo(post);
  }, [post]);

  return (
    <div style={{ overflowX: 'hidden', background: '#fff' }}>
      <style>{POST_CSS}</style>
      <Header active="blog" phone={phone} />

      {status === 'ok' && post && (
        <>
          <section style={{ background: '#102232', padding: 'clamp(54px,8vw,86px) 0 clamp(36px,5vw,52px)' }}>
            <div style={{ width: '100%', maxWidth: 820, margin: '0 auto', padding: '0 clamp(18px,4vw,40px)' }}>
              <Link to="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: 7, color: '#7BE0A6', textDecoration: 'none', fontFamily: "'Barlow Semi Condensed', sans-serif", fontWeight: 700, fontSize: 15, marginBottom: 18 }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
                All Posts
              </Link>
              {post.category && <div style={{ fontFamily: "'Barlow Semi Condensed', sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: '2px', textTransform: 'uppercase', color: '#5FCF8E', marginBottom: 12 }}>{post.category}</div>}
              <h1 style={{ fontFamily: "'Barlow Semi Condensed', sans-serif", fontWeight: 800, color: '#fff', fontSize: 'clamp(30px,4.6vw,46px)', lineHeight: 1.08, letterSpacing: '-0.5px', margin: '0 0 16px' }}>{post.title}</h1>
              <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 15 }}>{fmtDate(post.date)}{post.readTime ? ` · ${post.readTime} min read` : ''}</div>
            </div>
          </section>

          <article style={{ padding: 'clamp(40px,6vw,72px) 0' }}>
            <div style={{ width: '100%', maxWidth: 820, margin: '0 auto', padding: '0 clamp(18px,4vw,40px)' }}>
              <div className="post-body" dangerouslySetInnerHTML={{ __html: post.content }} />
              {Array.isArray(post.tags) && post.tags.length > 0 && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 9, marginTop: 36, paddingTop: 26, borderTop: '1px solid #E6EAE8' }}>
                  {post.tags.map((t) => (
                    <span key={t} style={{ background: '#F4F6F5', border: '1px solid #E6EAE8', color: '#5C6873', fontSize: 13.5, padding: '6px 13px', borderRadius: 30 }}>#{t}</span>
                  ))}
                </div>
              )}
            </div>
          </article>
        </>
      )}

      {status === 'loading' && (
        <section style={{ padding: '80px 0', minHeight: 320 }}>
          <div style={{ maxWidth: 820, margin: '0 auto', padding: '0 clamp(18px,4vw,40px)', color: '#5C6873', fontSize: 17 }}>Loading…</div>
        </section>
      )}

      {(status === 'notfound' || status === 'error') && (
        <section style={{ padding: 'clamp(60px,9vw,110px) 0', minHeight: 320, textAlign: 'center' }}>
          <div style={{ maxWidth: 560, margin: '0 auto', padding: '0 clamp(18px,4vw,40px)' }}>
            <h1 style={{ fontFamily: "'Barlow Semi Condensed', sans-serif", fontWeight: 800, fontSize: 32, color: '#102232', margin: '0 0 12px' }}>
              {status === 'notfound' ? 'Post not found' : 'Something went wrong'}
            </h1>
            <p style={{ color: '#5C6873', fontSize: 17, margin: '0 0 24px' }}>
              {status === 'notfound' ? 'This article may have been moved or removed.' : 'We couldn’t load this post. Please try again shortly.'}
            </p>
            <Link to="/blog" className="btn-green" style={{ display: 'inline-flex', alignItems: 'center', gap: 9, background: '#2E9D5C', color: '#fff', fontFamily: "'Barlow Semi Condensed', sans-serif", fontWeight: 700, fontSize: 17, padding: '13px 22px', borderRadius: 8, textDecoration: 'none' }}>Back to Blog</Link>
          </div>
        </section>
      )}

      <CTA phone={phone} />
      <Footer phone={phone} />
    </div>
  );
}
