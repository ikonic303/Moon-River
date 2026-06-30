import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const PHONE = '(303) 901-0048';

const NAV_LINKS = [
  { label: 'Home',         to: '/',             key: 'home' },
  { label: 'Services',     to: '/services',     key: 'services' },
  { label: 'About',        to: '/about',        key: 'about' },
  { label: 'Service Area', to: '/service-area', key: 'area' },
  { label: 'Blog',         to: '/blog',         key: 'blog' },
  { label: 'Contact',      to: '/contact',      key: 'contact' },
];

export default function Header({ active = 'home', phone = PHONE }) {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [vw, setVw]               = useState(typeof window !== 'undefined' ? window.innerWidth : 1280);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 14);
    const onResize = () => {
      const w = window.innerWidth;
      setVw(w);
      if (w >= 900) setMenuOpen(false);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const isMobile   = vw < 900;
  const phoneHref  = 'tel:+1' + phone.replace(/[^0-9]/g, '');
  const shadow     = scrolled
    ? '0 10px 34px rgba(8,18,28,0.4)'
    : '0 1px 0 rgba(255,255,255,0.06)';

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 60,
      background: 'rgba(13,25,38,0.94)',
      backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(255,255,255,0.08)',
      boxShadow: shadow, transition: 'box-shadow .25s ease',
      fontFamily: "'Barlow', sans-serif",
    }}>
      <div style={{
        width: '100%', maxWidth: 1220, margin: '0 auto',
        padding: '0 clamp(18px,4vw,40px)', height: 88,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 18,
      }}>
        <Link to="/" onClick={() => setMenuOpen(false)} style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0 }}>
          <img src="/assets/logo-full-white.png" alt="Moon River Construction logo" style={{ height: 64, width: 'auto', display: 'block' }} />
        </Link>

        {!isMobile && (
          <nav style={{ display: 'flex', alignItems: 'center', gap: 30 }}>
            {NAV_LINKS.map(link => (
              <Link key={link.key} to={link.to} className="nav-link" style={{
                textDecoration: 'none',
                color:      link.key === active ? '#fff' : 'rgba(255,255,255,0.82)',
                fontWeight: link.key === active ? 700  : 500,
                fontSize: 15.5, letterSpacing: '.2px', transition: 'color .15s ease',
              }}>{link.label}</Link>
            ))}
          </nav>
        )}

        <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0 }}>
          {!isMobile && (
            <Link to="/contact" className="btn-green" style={{
              display: 'inline-flex', alignItems: 'center',
              background: '#2E9D5C', color: '#fff',
              fontFamily: "'Barlow Semi Condensed', sans-serif",
              fontWeight: 700, fontSize: 15, letterSpacing: '.4px',
              padding: '11px 18px', borderRadius: 7, textDecoration: 'none',
              transition: 'background .18s ease, transform .18s ease',
            }}>Free Quote</Link>
          )}
          <a href={phoneHref} className="btn-orange" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: '#E07A36', color: '#fff',
            fontFamily: "'Barlow Semi Condensed', sans-serif",
            fontWeight: 700, fontSize: 15, letterSpacing: '.4px',
            padding: '11px 18px', borderRadius: 7, textDecoration: 'none',
            transition: 'background .18s ease, transform .18s ease',
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            <span>{phone}</span>
          </a>
          {isMobile && (
            <button onClick={() => setMenuOpen(o => !o)} aria-label="Menu" style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              width: 42, height: 42, background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.18)', borderRadius: 7,
              cursor: 'pointer', color: '#fff',
            }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                <line x1="3" y1="6"  x2="21" y2="6"/>
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
            </button>
          )}
        </div>
      </div>

      {menuOpen && (
        <div style={{ background: '#0B1826', borderTop: '1px solid rgba(255,255,255,0.08)', padding: '8px clamp(18px,4vw,40px) 18px' }}>
          {NAV_LINKS.map(link => (
            <Link key={link.key} to={link.to} onClick={() => setMenuOpen(false)} style={{
              display: 'block', padding: '13px 4px', textDecoration: 'none',
              color: link.key === active ? '#fff' : 'rgba(255,255,255,0.82)',
              fontFamily: "'Barlow Semi Condensed', sans-serif",
              fontWeight: 600, fontSize: 18, letterSpacing: '.3px',
              borderBottom: '1px solid rgba(255,255,255,0.07)',
            }}>{link.label}</Link>
          ))}
          <Link to="/contact" onClick={() => setMenuOpen(false)} style={{
            display: 'block', textAlign: 'center', marginTop: 14,
            background: '#2E9D5C', color: '#fff',
            fontFamily: "'Barlow Semi Condensed', sans-serif",
            fontWeight: 700, fontSize: 17, padding: 13,
            borderRadius: 8, textDecoration: 'none',
          }}>Request a Free Quote</Link>
        </div>
      )}
    </header>
  );
}
