import React from 'react';
import { Link } from 'react-router-dom';

const PHONE = '(303) 901-0048';

export default function CTA({
  phone   = PHONE,
  heading = 'Planning a project, inside or out?',
  text    = 'Get a fast quote from Moon River Construction today.',
}) {
  const phoneHref = 'tel:+1' + phone.replace(/[^0-9]/g, '');

  return (
    <section style={{ background: 'linear-gradient(105deg, #2E9D5C 0%, #1F7A47 100%)', padding: 'clamp(54px,7vw,86px) 0', fontFamily: "'Barlow', sans-serif" }}>
      <div style={{ width: '100%', maxWidth: 1000, margin: '0 auto', padding: '0 clamp(18px,4vw,40px)', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Barlow Semi Condensed', sans-serif", fontWeight: 800, fontSize: 'clamp(28px,4.2vw,48px)', color: '#fff', lineHeight: 1.08, letterSpacing: '-0.4px', margin: '0 0 14px', textWrap: 'balance' }}>{heading}</h2>
        <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: 'clamp(17px,2vw,21px)', margin: '0 auto 32px', maxWidth: 560 }}>{text}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center' }}>
          <a href={phoneHref} className="cta-phone" style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            background: '#fff', color: '#102232',
            fontFamily: "'Barlow Semi Condensed', sans-serif",
            fontWeight: 700, fontSize: 18, letterSpacing: '.3px',
            padding: '16px 28px', borderRadius: 9, textDecoration: 'none',
            transition: 'transform .18s ease, box-shadow .18s ease',
            boxShadow: '0 10px 28px rgba(9,20,32,0.18)',
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            Call {phone}
          </a>
          <Link to="/contact" className="btn-quote" style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            background: 'rgba(255,255,255,0.12)', color: '#fff',
            border: '1.5px solid rgba(255,255,255,0.6)',
            fontFamily: "'Barlow Semi Condensed', sans-serif",
            fontWeight: 700, fontSize: 18, letterSpacing: '.3px',
            padding: '16px 28px', borderRadius: 9, textDecoration: 'none',
            transition: 'background .18s ease',
          }}>Request a Free Quote</Link>
        </div>
      </div>
    </section>
  );
}
