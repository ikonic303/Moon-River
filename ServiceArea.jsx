import React from 'react';
import Header from './Header';
import CTA from './CTA';
import Footer from './Footer';

const areas = ['Brighton', 'Commerce City', 'Thornton', 'Henderson', 'Lochbuie', 'Fort Lupton', 'Todd Creek', 'Reunion', 'Northglenn'];

const workTypes = [
  { t: 'Residential Neighborhoods', d: 'Homeowners across Brighton-area neighborhoods looking for quality concrete, landscaping, and remodeling work.' },
  { t: 'Property Management Jobs',  d: 'Reliable, scheduled service for managers handling rentals and multi-property portfolios.' },
  { t: 'Realtor Referral Work',     d: 'Fast turnarounds to get listings ready — concrete, landscaping, and interior updates.' },
];

const PinIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#2E9D5C" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="2.6"/>
  </svg>
);

export default function ServiceArea({ phone }) {
  return (
    <div style={{ overflowX: 'hidden', background: '#fff' }}>
      <Header active="area" phone={phone} />

      {/* PAGE HERO */}
      <section style={{
        position: 'relative',
        backgroundImage: "linear-gradient(100deg, rgba(9,20,32,0.93) 0%, rgba(9,20,32,0.7) 100%), url('assets/photo-edging.jpg')",
        backgroundSize: 'cover', backgroundPosition: 'center 50%',
        padding: 'clamp(64px,11vw,118px) 0',
      }}>
        <div style={{ width: '100%', maxWidth: 1220, margin: '0 auto', padding: '0 clamp(18px,4vw,40px)' }}>
          <div style={{ fontFamily: "'Barlow Semi Condensed', sans-serif", fontWeight: 700, fontSize: 14, letterSpacing: '2.5px', textTransform: 'uppercase', color: '#5FCF8E', marginBottom: 14 }}>Service Area</div>
          <h1 style={{ fontFamily: "'Barlow Semi Condensed', sans-serif", fontWeight: 800, color: '#fff', fontSize: 'clamp(34px,5.2vw,58px)', lineHeight: 1.05, letterSpacing: '-0.5px', margin: '0 0 18px', maxWidth: 760 }}>Serving Brighton &amp; Surrounding Areas</h1>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 'clamp(17px,2vw,21px)', lineHeight: 1.55, margin: 0, maxWidth: 620 }}>Based in Brighton, Colorado, we proudly work throughout the city and nearby communities.</p>
        </div>
      </section>

      {/* AREAS + MAP CARD */}
      <section style={{ background: '#fff', padding: 'clamp(56px,8vw,104px) 0' }}>
        <div style={{ width: '100%', maxWidth: 1220, margin: '0 auto', padding: '0 clamp(18px,4vw,40px)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 'clamp(36px,5vw,64px)', alignItems: 'center' }}>
            <div>
              <div style={{ fontFamily: "'Barlow Semi Condensed', sans-serif", fontWeight: 700, fontSize: 14, letterSpacing: '2.5px', textTransform: 'uppercase', color: '#2E9D5C', marginBottom: 12 }}>Where We Work</div>
              <h2 style={{ fontFamily: "'Barlow Semi Condensed', sans-serif", fontWeight: 800, fontSize: 'clamp(26px,3.6vw,42px)', color: '#102232', lineHeight: 1.1, letterSpacing: '-0.4px', margin: '0 0 18px' }}>Communities We Serve</h2>
              <p style={{ color: '#4A5862', fontSize: 18, lineHeight: 1.6, margin: '0 0 24px', maxWidth: 460 }}>If you're in or near Brighton, we'd love to help. Here are some of the communities we regularly serve.</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {areas.map(a => (
                  <span key={a} style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: '#F4F6F5', border: '1px solid #E6EAE8', color: '#33404A', fontWeight: 600, fontSize: 14.5, padding: '9px 15px', borderRadius: 30 }}>
                    <PinIcon /> {a}
                  </span>
                ))}
              </div>
            </div>
            <div style={{
              position: 'relative', borderRadius: 16, overflow: 'hidden',
              minHeight: 'clamp(320px,42vw,460px)',
              backgroundImage: "linear-gradient(180deg, rgba(9,20,32,0.12) 0%, rgba(9,20,32,0.8) 100%), url('assets/photo-pad.jpg')",
              backgroundSize: 'cover', backgroundPosition: 'center',
              boxShadow: '0 24px 50px rgba(16,34,50,0.18)',
              display: 'flex', alignItems: 'flex-end',
            }}>
              <div style={{ padding: '30px 30px 28px', color: '#fff' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(46,157,92,0.9)', color: '#fff', fontFamily: "'Barlow Semi Condensed', sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: '1px', textTransform: 'uppercase', padding: '6px 13px', borderRadius: 30, marginBottom: 14 }}>
                  <PinIcon size={14} /> Home Base
                </div>
                <div style={{ fontFamily: "'Barlow Semi Condensed', sans-serif", fontWeight: 800, fontSize: 'clamp(24px,3vw,32px)', lineHeight: 1.1 }}>Brighton, Colorado</div>
                <div style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, marginTop: 6 }}>Proudly serving our neighbors and growing with the community.</div>
              </div>
            </div>
          </div>

          {/* WORK TYPES */}
          <div style={{ marginTop: 'clamp(48px,6vw,80px)' }}>
            <h3 style={{ fontFamily: "'Barlow Semi Condensed', sans-serif", fontWeight: 800, fontSize: 'clamp(22px,3vw,32px)', color: '#102232', textAlign: 'center', margin: '0 0 36px' }}>Work We Take On</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(230px,1fr))', gap: 20 }}>
              {workTypes.map((w, i) => (
                <div key={i} style={{ background: '#F4F6F5', border: '1px solid #E6EAE8', borderRadius: 14, padding: '30px 26px' }}>
                  <div style={{ width: 48, height: 48, borderRadius: 11, background: '#EAF6EF', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2E9D5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
                    </svg>
                  </div>
                  <div style={{ fontFamily: "'Barlow Semi Condensed', sans-serif", fontWeight: 700, fontSize: 21, color: '#102232', marginBottom: 8 }}>{w.t}</div>
                  <div style={{ color: '#5C6873', fontSize: 15.5, lineHeight: 1.6 }}>{w.d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA
        phone={phone}
        heading="In Brighton or nearby? Let's get started."
        text="Tell us where you are and what you need — we'll get you a fast, free quote."
      />
      <Footer phone={phone} />
    </div>
  );
}
