import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import CTA from './CTA';
import Footer from './Footer';

const PHONE = '(303) 901-0048';

const heroTrust = ['Local Brighton-area crew', 'Free, no-pressure quotes', 'Fast same-day response'];

const services = [
  { title: 'Concrete',          desc: 'Driveways, walkways, patios, small flatwork, and repairs for homes and properties.',  img: 'assets/photo-concrete.jpg',  pos: 'center',     alt: 'Concrete driveways, walkways and patios' },
  { title: 'Sprinkler Repair',  desc: 'Broken lines, damaged heads, leaks, seasonal repairs, and general irrigation fixes.', img: 'assets/photo-sprinkler.jpg', pos: 'center 40%', alt: 'Sprinkler and irrigation repair' },
  { title: 'Sod Installation',  desc: 'Fresh sod for yards, curb appeal, property updates, and outdoor improvements.',       img: 'assets/photo-sod.jpg',       pos: 'center',     alt: 'Fresh sod installation' },
];

const whyPoints = [
  { t: 'Local Brighton-Area Service',   d: 'We live and work here — you get a neighbor, not a call center.' },
  { t: 'Fast Response to New Leads',    d: 'Call or request a quote and hear back quickly, usually the same day.' },
  { t: 'Small & Large Jobs Welcome',    d: 'From a single concrete pad to a full patio or sod project.' },
  { t: 'Property-Management Friendly',  d: 'Reliable, scheduled work for homeowners, managers, and realtors.' },
  { t: 'Honest & Family-Supported',     d: 'A family-supported business built on doing right by people.' },
  { t: 'Growing With the Community',    d: 'One truck now, growing one satisfied customer at a time.' },
];

const ArrowIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
);

export default function Home({ phone = PHONE }) {
  const phoneHref = 'tel:+1' + phone.replace(/[^0-9]/g, '');

  return (
    <div style={{ overflowX: 'hidden', background: '#fff' }}>
      <Header active="home" phone={phone} />

      {/* HERO */}
      <section style={{
        position: 'relative',
        backgroundImage: "linear-gradient(100deg, rgba(9,20,32,0.94) 0%, rgba(9,20,32,0.78) 42%, rgba(9,20,32,0.38) 100%), url('assets/photo-hero.jpg')",
        backgroundSize: 'cover', backgroundPosition: 'center 62%',
        minHeight: 'clamp(560px,86vh,800px)', display: 'flex', alignItems: 'center',
      }}>
        <div style={{ width: '100%', maxWidth: 1220, margin: '0 auto', padding: 'clamp(80px,12vh,120px) clamp(18px,4vw,40px)' }}>
          <div style={{ maxWidth: 680 }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'rgba(46,157,92,0.16)', border: '1px solid rgba(46,157,92,0.45)',
              color: '#7BE0A6', fontFamily: "'Barlow Semi Condensed', sans-serif",
              fontWeight: 600, fontSize: 13.5, letterSpacing: '1.5px', textTransform: 'uppercase',
              padding: '7px 14px', borderRadius: 30, marginBottom: 24,
            }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#2E9D5C', display: 'inline-block' }} />
              Brighton, CO &amp; Surrounding Areas
            </div>
            <h1 style={{ fontFamily: "'Barlow Semi Condensed', sans-serif", fontWeight: 800, color: '#fff', fontSize: 'clamp(34px,5.6vw,62px)', lineHeight: 1.04, letterSpacing: '-0.5px', margin: '0 0 22px', textWrap: 'balance' }}>
              Reliable Concrete, Sprinkler Repair &amp; Sod Installation in Brighton, CO
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 'clamp(17px,2vw,21px)', lineHeight: 1.55, margin: '0 0 34px', maxWidth: 600 }}>
              Moon River Construction helps homeowners, property managers, realtors, and contractors get quality outdoor and construction work done right.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
              <Link to="/contact" className="btn-green" style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                background: '#2E9D5C', color: '#fff',
                fontFamily: "'Barlow Semi Condensed', sans-serif",
                fontWeight: 700, fontSize: 18, letterSpacing: '.4px',
                padding: '16px 28px', borderRadius: 9, textDecoration: 'none',
                boxShadow: '0 10px 30px rgba(46,157,92,0.35)',
                transition: 'background .18s ease, transform .18s ease',
              }}>
                Request a Free Quote <ArrowIcon />
              </Link>
              <a href={phoneHref} className="btn-white" style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                background: 'rgba(255,255,255,0.08)', color: '#fff',
                border: '1.5px solid rgba(255,255,255,0.5)',
                fontFamily: "'Barlow Semi Condensed', sans-serif",
                fontWeight: 700, fontSize: 18, letterSpacing: '.4px',
                padding: '16px 26px', borderRadius: 9, textDecoration: 'none',
                transition: 'background .18s ease',
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                Call Now
              </a>
            </div>
          </div>
        </div>
        <div style={{
          position: 'absolute', left: 0, right: 0, bottom: 0,
          background: 'rgba(9,20,32,0.55)', backdropFilter: 'blur(4px)', WebkitBackdropFilter: 'blur(4px)',
          borderTop: '1px solid rgba(255,255,255,0.1)',
        }}>
          <div style={{ width: '100%', maxWidth: 1220, margin: '0 auto', padding: '14px clamp(18px,4vw,40px)', display: 'flex', flexWrap: 'wrap', gap: '14px 34px' }}>
            {heroTrust.map(t => (
              <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 9, color: 'rgba(255,255,255,0.9)', fontWeight: 500, fontSize: 14.5 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2E9D5C" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES TEASER */}
      <section style={{ background: '#fff', padding: 'clamp(64px,9vw,116px) 0' }}>
        <div style={{ width: '100%', maxWidth: 1220, margin: '0 auto', padding: '0 clamp(18px,4vw,40px)' }}>
          <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 52px' }}>
            <div style={{ fontFamily: "'Barlow Semi Condensed', sans-serif", fontWeight: 700, fontSize: 14, letterSpacing: '2.5px', textTransform: 'uppercase', color: '#2E9D5C', marginBottom: 12 }}>What We Do</div>
            <h2 style={{ fontFamily: "'Barlow Semi Condensed', sans-serif", fontWeight: 800, fontSize: 'clamp(28px,4vw,46px)', color: '#102232', lineHeight: 1.08, letterSpacing: '-0.4px', margin: '0 0 14px' }}>Quality Outdoor &amp; Construction Work</h2>
            <p style={{ color: '#5C6873', fontSize: 18, margin: 0 }}>Three core services done right for homes and properties across the Brighton area.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(290px,1fr))', gap: 26 }}>
            {services.map(s => (
              <Link key={s.title} to="/services" className="service-card" style={{
                display: 'block', textDecoration: 'none',
                border: '1px solid #E6EAE8', borderRadius: 14, overflow: 'hidden',
                background: '#fff', boxShadow: '0 1px 3px rgba(16,34,50,0.05)',
                transition: 'transform .2s ease, box-shadow .2s ease',
              }}>
                <div style={{ height: 218, overflow: 'hidden' }}>
                  <img src={s.img} alt={s.alt} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: s.pos, display: 'block' }} />
                </div>
                <div style={{ padding: '28px 26px 30px' }}>
                  <h3 style={{ fontFamily: "'Barlow Semi Condensed', sans-serif", fontWeight: 700, fontSize: 24, color: '#102232', margin: '0 0 10px' }}>{s.title}</h3>
                  <p style={{ color: '#5C6873', fontSize: 16, lineHeight: 1.6, margin: '0 0 20px' }}>{s.desc}</p>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, color: '#2E9D5C', fontFamily: "'Barlow Semi Condensed', sans-serif", fontWeight: 700, fontSize: 16, letterSpacing: '.3px' }}>
                    Learn More
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section style={{ background: '#102232', padding: 'clamp(64px,9vw,116px) 0' }}>
        <div style={{ width: '100%', maxWidth: 1220, margin: '0 auto', padding: '0 clamp(18px,4vw,40px)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(290px,1fr))', gap: 'clamp(40px,5vw,72px)', alignItems: 'start' }}>
            <div>
              <div style={{ fontFamily: "'Barlow Semi Condensed', sans-serif", fontWeight: 700, fontSize: 14, letterSpacing: '2.5px', textTransform: 'uppercase', color: '#5FCF8E', marginBottom: 12 }}>Why Choose Us</div>
              <h2 style={{ fontFamily: "'Barlow Semi Condensed', sans-serif", fontWeight: 800, fontSize: 'clamp(28px,4vw,46px)', color: '#fff', lineHeight: 1.08, letterSpacing: '-0.4px', margin: '0 0 18px' }}>A Local Crew You Can Count On</h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 18, lineHeight: 1.6, margin: '0 0 28px', maxWidth: 440 }}>We keep it simple: show up, work hard, and do right by the people and properties we serve.</p>
              <Link to="/about" className="btn-green" style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                background: '#2E9D5C', color: '#fff',
                fontFamily: "'Barlow Semi Condensed', sans-serif",
                fontWeight: 700, fontSize: 17, padding: '14px 24px', borderRadius: 8, textDecoration: 'none',
                transition: 'background .18s ease, transform .18s ease',
              }}>More About Us <ArrowIcon size={17} /></Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 14 }}>
              {whyPoints.map((p, i) => (
                <div key={i} style={{ display: 'flex', gap: 14, padding: '22px 20px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12 }}>
                  <div style={{ flexShrink: 0, width: 34, height: 34, borderRadius: 9, background: 'rgba(46,157,92,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#5FCF8E" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Barlow Semi Condensed', sans-serif", fontWeight: 700, fontSize: 18, color: '#fff', lineHeight: 1.2, marginBottom: 5 }}>{p.t}</div>
                    <div style={{ color: 'rgba(255,255,255,0.62)', fontSize: 14.5, lineHeight: 1.5 }}>{p.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section style={{ background: '#F4F6F5', padding: 'clamp(64px,9vw,116px) 0' }}>
        <div style={{ width: '100%', maxWidth: 1220, margin: '0 auto', padding: '0 clamp(18px,4vw,40px)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 'clamp(36px,5vw,64px)', alignItems: 'center' }}>
            <div style={{ position: 'relative' }}>
              <img src="assets/photo-patio-dusk.jpg" alt="Moon River Construction stamped concrete patio project" style={{ width: '100%', height: 'clamp(320px,46vw,460px)', objectFit: 'cover', borderRadius: 16, display: 'block', boxShadow: '0 24px 50px rgba(16,34,50,0.18)' }} />
              <div style={{ position: 'absolute', bottom: -22, right: -8, background: '#102232', color: '#fff', padding: '20px 26px', borderRadius: 14, boxShadow: '0 16px 40px rgba(16,34,50,0.3)', display: 'flex', alignItems: 'center', gap: 14 }}>
                <img src="assets/logo-icon-white.png" alt="" style={{ height: 40, width: 'auto' }} />
                <div style={{ lineHeight: 1.15 }}>
                  <div style={{ fontFamily: "'Barlow Semi Condensed', sans-serif", fontWeight: 800, fontSize: 18, letterSpacing: '.5px' }}>Family-Supported</div>
                  <div style={{ color: '#7BE0A6', fontSize: 13.5, fontWeight: 500 }}>Local to Brighton, CO</div>
                </div>
              </div>
            </div>
            <div>
              <div style={{ fontFamily: "'Barlow Semi Condensed', sans-serif", fontWeight: 700, fontSize: 14, letterSpacing: '2.5px', textTransform: 'uppercase', color: '#2E9D5C', marginBottom: 12 }}>About Us</div>
              <h2 style={{ fontFamily: "'Barlow Semi Condensed', sans-serif", fontWeight: 800, fontSize: 'clamp(28px,4vw,46px)', color: '#102232', lineHeight: 1.08, letterSpacing: '-0.4px', margin: '0 0 20px' }}>Built on Hard Work &amp; Reliable Service</h2>
              <p style={{ color: '#4A5862', fontSize: 'clamp(17px,1.6vw,19px)', lineHeight: 1.65, margin: '0 0 26px' }}>Moon River Construction is a local Brighton-based construction and outdoor service business built on hard work, referrals, and reliable service — growing one job at a time.</p>
              <Link to="/about" className="read-story" style={{ display: 'inline-flex', alignItems: 'center', gap: 9, color: '#2E9D5C', fontFamily: "'Barlow Semi Condensed', sans-serif", fontWeight: 700, fontSize: 17, textDecoration: 'none', transition: 'gap .15s ease' }}>
                Read Our Story
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTA phone={phone} />
      <Footer phone={phone} />
    </div>
  );
}
