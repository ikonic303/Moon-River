import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import CTA from './CTA';
import Footer from './Footer';

const CheckItem = ({ children }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2E9D5C" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      <polyline points="20 6 9 17 4 12"/>
    </svg>
    <span style={{ color: '#33404A', fontSize: 16, fontWeight: 500 }}>{children}</span>
  </div>
);

const QuoteBtn = () => (
  <Link to="/contact" className="btn-green" style={{
    display: 'inline-flex', alignItems: 'center', gap: 10,
    background: '#2E9D5C', color: '#fff',
    fontFamily: "'Barlow Semi Condensed', sans-serif",
    fontWeight: 700, fontSize: 17, padding: '14px 24px', borderRadius: 8, textDecoration: 'none',
    transition: 'background .18s ease, transform .18s ease',
  }}>
    Get a Quote
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
    </svg>
  </Link>
);

export default function Services({ phone }) {
  return (
    <div style={{ overflowX: 'hidden', background: '#fff' }}>
      <Header active="services" phone={phone} />

      {/* PAGE HERO */}
      <section style={{
        position: 'relative',
        backgroundImage: "linear-gradient(100deg, rgba(9,20,32,0.93) 0%, rgba(9,20,32,0.7) 100%), url('assets/photo-pad.jpg')",
        backgroundSize: 'cover', backgroundPosition: 'center 60%',
        padding: 'clamp(64px,11vw,118px) 0',
      }}>
        <div style={{ width: '100%', maxWidth: 1220, margin: '0 auto', padding: '0 clamp(18px,4vw,40px)' }}>
          <div style={{ fontFamily: "'Barlow Semi Condensed', sans-serif", fontWeight: 700, fontSize: 14, letterSpacing: '2.5px', textTransform: 'uppercase', color: '#5FCF8E', marginBottom: 14 }}>Our Services</div>
          <h1 style={{ fontFamily: "'Barlow Semi Condensed', sans-serif", fontWeight: 800, color: '#fff', fontSize: 'clamp(34px,5.2vw,58px)', lineHeight: 1.05, letterSpacing: '-0.5px', margin: '0 0 18px', maxWidth: 760 }}>Concrete, Sprinkler Repair &amp; Sod Installation</h1>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 'clamp(17px,2vw,21px)', lineHeight: 1.55, margin: 0, maxWidth: 600 }}>Quality outdoor and construction work for homeowners, property managers, realtors, and contractors across the Brighton area.</p>
        </div>
      </section>

      {/* CONCRETE */}
      <section id="concrete" style={{ background: '#fff', padding: 'clamp(56px,8vw,104px) 0' }}>
        <div style={{ width: '100%', maxWidth: 1220, margin: '0 auto', padding: '0 clamp(18px,4vw,40px)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 'clamp(36px,5vw,64px)', alignItems: 'center' }}>
            <div>
              <img src="assets/photo-concrete.jpg" alt="Concrete flatwork and patios" style={{ width: '100%', height: 'clamp(300px,40vw,440px)', objectFit: 'cover', borderRadius: 16, display: 'block', boxShadow: '0 24px 50px rgba(16,34,50,0.16)' }} />
            </div>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <span style={{ width: 46, height: 46, borderRadius: 11, background: '#EAF6EF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#2E9D5C" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="8" width="18" height="11" rx="1.5"/><line x1="3" y1="13" x2="21" y2="13"/><line x1="10" y1="8" x2="8" y2="19"/>
                  </svg>
                </span>
                <span style={{ fontFamily: "'Barlow Semi Condensed', sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: '2px', textTransform: 'uppercase', color: '#2E9D5C' }}>Flatwork &amp; Repairs</span>
              </div>
              <h2 style={{ fontFamily: "'Barlow Semi Condensed', sans-serif", fontWeight: 800, fontSize: 'clamp(28px,4vw,44px)', color: '#102232', lineHeight: 1.08, letterSpacing: '-0.4px', margin: '0 0 16px' }}>Concrete</h2>
              <p style={{ color: '#4A5862', fontSize: 'clamp(16px,1.6vw,19px)', lineHeight: 1.65, margin: '0 0 24px' }}>Driveways, walkways, patios, small flatwork, repairs, and concrete projects for residential and property management needs. We pour clean, level work that holds up to Colorado seasons.</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 11, marginBottom: 30 }}>
                <CheckItem>Driveways &amp; walkways</CheckItem>
                <CheckItem>Patios &amp; flatwork</CheckItem>
                <CheckItem>Small pours &amp; pads</CheckItem>
                <CheckItem>Concrete repairs</CheckItem>
              </div>
              <QuoteBtn />
            </div>
          </div>
        </div>
      </section>

      {/* SPRINKLER */}
      <section id="sprinkler" style={{ background: '#F4F6F5', padding: 'clamp(56px,8vw,104px) 0' }}>
        <div style={{ width: '100%', maxWidth: 1220, margin: '0 auto', padding: '0 clamp(18px,4vw,40px)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 'clamp(36px,5vw,64px)', alignItems: 'center' }}>
            <div style={{ order: 2 }}>
              <img src="assets/photo-sprinkler.jpg" alt="Sprinkler and irrigation repair" style={{ width: '100%', height: 'clamp(300px,40vw,440px)', objectFit: 'cover', objectPosition: 'center 40%', borderRadius: 16, display: 'block', boxShadow: '0 24px 50px rgba(16,34,50,0.16)' }} />
            </div>
            <div style={{ order: 1 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <span style={{ width: 46, height: 46, borderRadius: 11, background: '#EAF6EF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#2E9D5C" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2.5C12 2.5 6 9.5 6 14.2A6 6 0 0 0 18 14.2C18 9.5 12 2.5 12 2.5Z"/>
                  </svg>
                </span>
                <span style={{ fontFamily: "'Barlow Semi Condensed', sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: '2px', textTransform: 'uppercase', color: '#2E9D5C' }}>Irrigation Fixes</span>
              </div>
              <h2 style={{ fontFamily: "'Barlow Semi Condensed', sans-serif", fontWeight: 800, fontSize: 'clamp(28px,4vw,44px)', color: '#102232', lineHeight: 1.08, letterSpacing: '-0.4px', margin: '0 0 16px' }}>Sprinkler Repair</h2>
              <p style={{ color: '#4A5862', fontSize: 'clamp(16px,1.6vw,19px)', lineHeight: 1.65, margin: '0 0 24px' }}>Sprinkler troubleshooting, broken lines, damaged heads, leaks, seasonal repairs, and general irrigation fixes. We get your system running right so your yard stays healthy.</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 11, marginBottom: 30 }}>
                <CheckItem>Broken lines &amp; leaks</CheckItem>
                <CheckItem>Damaged sprinkler heads</CheckItem>
                <CheckItem>Seasonal start-up &amp; blowout</CheckItem>
                <CheckItem>System troubleshooting</CheckItem>
              </div>
              <QuoteBtn />
            </div>
          </div>
        </div>
      </section>

      {/* SOD */}
      <section id="sod" style={{ background: '#fff', padding: 'clamp(56px,8vw,104px) 0' }}>
        <div style={{ width: '100%', maxWidth: 1220, margin: '0 auto', padding: '0 clamp(18px,4vw,40px)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 'clamp(36px,5vw,64px)', alignItems: 'center' }}>
            <div>
              <img src="assets/photo-sod.jpg" alt="Fresh sod installation" style={{ width: '100%', height: 'clamp(300px,40vw,440px)', objectFit: 'cover', borderRadius: 16, display: 'block', boxShadow: '0 24px 50px rgba(16,34,50,0.16)' }} />
            </div>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <span style={{ width: 46, height: 46, borderRadius: 11, background: '#EAF6EF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#2E9D5C" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 21c0-5 0-7-4-10"/><path d="M12 21c0-5 0-7 4-10"/><path d="M12 21V9"/><line x1="3" y1="21" x2="21" y2="21"/>
                  </svg>
                </span>
                <span style={{ fontFamily: "'Barlow Semi Condensed', sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: '2px', textTransform: 'uppercase', color: '#2E9D5C' }}>Fresh Turf</span>
              </div>
              <h2 style={{ fontFamily: "'Barlow Semi Condensed', sans-serif", fontWeight: 800, fontSize: 'clamp(28px,4vw,44px)', color: '#102232', lineHeight: 1.08, letterSpacing: '-0.4px', margin: '0 0 16px' }}>Sod Installation</h2>
              <p style={{ color: '#4A5862', fontSize: 'clamp(16px,1.6vw,19px)', lineHeight: 1.65, margin: '0 0 24px' }}>Fresh sod installation for yards, curb appeal, property updates, and outdoor improvements. Perfect for homeowners refreshing a lawn or realtors prepping a property for sale.</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 11, marginBottom: 30 }}>
                <CheckItem>New lawn installation</CheckItem>
                <CheckItem>Curb-appeal upgrades</CheckItem>
                <CheckItem>Property turnovers</CheckItem>
                <CheckItem>Yard repairs &amp; patches</CheckItem>
              </div>
              <QuoteBtn />
            </div>
          </div>
        </div>
      </section>

      <CTA phone={phone} />
      <Footer phone={phone} />
    </div>
  );
}
