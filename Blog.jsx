import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import CTA from './CTA';
import Footer from './Footer';

function fmtDate(d) {
  try { return new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }); }
  catch { return ''; }
}

const Chip = ({ children }) => (
  <span style={{ display: 'inline-block', background: '#EAF6EF', color: '#2E9D5C', fontFamily: "'Barlow Semi Condensed', sans-serif", fontWeight: 700, fontSize: 12.5, letterSpacing: '.6px', textTransform: 'uppercase', padding: '5px 11px', borderRadius: 30 }}>{children}</span>
);

export default function Blog({ phone }) {
  const [posts, setPosts] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    document.title = 'Blog | Moon River Construction — Brighton, CO';
    let alive = true;
    fetch('/api/posts')
      .then((r) => r.ok ? r.json() : Promise.reject())
      .then((d) => { if (alive) setPosts(d.posts || []); })
      .catch(() => { if (alive) setError(true); });
    return () => { alive = false; };
  }, []);

  return (
    <div style={{ overflowX: 'hidden', background: '#fff' }}>
      <Header active="blog" phone={phone} />

      {/* HERO */}
      <section style={{ background: '#102232', padding: 'clamp(54px,8vw,92px) 0 clamp(40px,5vw,60px)' }}>
        <div style={{ width: '100%', maxWidth: 1220, margin: '0 auto', padding: '0 clamp(18px,4vw,40px)' }}>
          <div style={{ fontFamily: "'Barlow Semi Condensed', sans-serif", fontWeight: 700, fontSize: 14, letterSpacing: '2.5px', textTransform: 'uppercase', color: '#5FCF8E', marginBottom: 14 }}>Blog</div>
          <h1 style={{ fontFamily: "'Barlow Semi Condensed', sans-serif", fontWeight: 800, color: '#fff', fontSize: 'clamp(34px,5.2vw,52px)', lineHeight: 1.05, letterSpacing: '-0.5px', margin: '0 0 16px' }}>Tips, Guides &amp; Project Insights</h1>
          <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: 'clamp(16px,2vw,20px)', lineHeight: 1.55, margin: 0, maxWidth: 620 }}>Practical advice on concrete, landscaping, remodeling, and caring for your home in the Brighton area.</p>
        </div>
      </section>

      {/* LIST */}
      <section style={{ padding: 'clamp(48px,7vw,90px) 0', minHeight: 360 }}>
        <div style={{ width: '100%', maxWidth: 1220, margin: '0 auto', padding: '0 clamp(18px,4vw,40px)' }}>
          {posts === null && !error && (
            <p style={{ color: '#5C6873', fontSize: 17 }}>Loading posts…</p>
          )}
          {error && (
            <p style={{ color: '#5C6873', fontSize: 17 }}>We couldn’t load posts right now. Please check back soon.</p>
          )}
          {posts && posts.length === 0 && (
            <div style={{ textAlign: 'center', maxWidth: 520, margin: '0 auto', padding: '40px 0' }}>
              <h2 style={{ fontFamily: "'Barlow Semi Condensed', sans-serif", fontWeight: 800, fontSize: 28, color: '#102232', margin: '0 0 10px' }}>New posts coming soon</h2>
              <p style={{ color: '#5C6873', fontSize: 17, margin: 0 }}>Our first articles are on the way. In the meantime, give us a call for help with your project.</p>
            </div>
          )}
          {posts && posts.length > 0 && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(320px,1fr))', gap: 26 }}>
              {posts.map((p) => (
                <Link key={p.slug} to={`/blog/${p.slug}`} className="service-card" style={{
                  display: 'flex', flexDirection: 'column', textDecoration: 'none',
                  border: '1px solid #E6EAE8', borderRadius: 14, overflow: 'hidden',
                  background: '#fff', boxShadow: '0 1px 3px rgba(16,34,50,0.05)',
                  transition: 'transform .2s ease, box-shadow .2s ease', padding: '26px 24px 28px',
                }}>
                  {p.category && <div style={{ marginBottom: 14 }}><Chip>{p.category}</Chip></div>}
                  <h2 style={{ fontFamily: "'Barlow Semi Condensed', sans-serif", fontWeight: 700, fontSize: 22, color: '#102232', lineHeight: 1.2, margin: '0 0 10px' }}>{p.title}</h2>
                  <p style={{ color: '#5C6873', fontSize: 15.5, lineHeight: 1.6, margin: '0 0 18px', flex: 1 }}>{p.excerpt}</p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10 }}>
                    <span style={{ color: '#8A95A0', fontSize: 13.5 }}>{fmtDate(p.date)}{p.readTime ? ` · ${p.readTime} min read` : ''}</span>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#2E9D5C', fontFamily: "'Barlow Semi Condensed', sans-serif", fontWeight: 700, fontSize: 15 }}>
                      Read
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <CTA phone={phone} />
      <Footer phone={phone} />
    </div>
  );
}
