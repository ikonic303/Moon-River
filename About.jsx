import React from 'react';
import Header from './Header';
import CTA from './CTA';
import Footer from './Footer';

const PHONE = '(303) 901-0048';

const values = [
  { t: 'Honest & Straightforward', d: 'Clear quotes, no surprises, and work we stand behind.' },
  { t: 'Hardworking',              d: 'We show up on time and put in the effort every job deserves.' },
  { t: 'Local & Family-Supported', d: 'Built right here in Brighton, backed by family.' },
  { t: 'Reliable',                 d: 'We do what we say — and follow up fast on new leads.' },
  { t: 'Big & Small Jobs',         d: 'From a single repair to a full patio or sod project.' },
  { t: 'Growing With You',         d: 'Earning referrals and growing one happy customer at a time.' },
];

export default function About() {
  return (
    <div style={{ overflowX: 'hidden', background: '#fff' }}>
      <Header active="about" />

      {/* PAGE HERO */}
      <section style={{
        position: 'relative',
        backgroundImage: "linear-gradient(100deg, rgba(9,20,32,0.93) 0%, rgba(9,20,32,0.7) 100%), url('/assets/photo-patio-dusk.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center 55%',
        padding: 'clamp(64px,11vw,118px) 0',
      }}>
        <div style={{ width: '100%', maxWidth: 1220, margin: '0 auto', padding: '0 clamp(18px,4vw,40px)' }}>
          <div style={{
            fontFamily: "'Barlow Semi Condensed', sans-serif",
            fontWeight: 700,
            fontSize: 14,
            letterSpacing: '2.5px',
            textTransform: 'uppercase',
            color: '#5FCF8E',
            marginBottom: 14,
          }}>About Us</div>
          <h1 style={{
            fontFamily: "'Barlow Semi Condensed', sans-serif",
            fontWeight: 800,
            color: '#fff',
            fontSize: 'clamp(34px,5.2vw,58px)',
            lineHeight: 1.05,
            letterSpacing: '-0.5px',
            margin: '0 0 18px',
            maxWidth: 760,
          }}>Built on Hard Work &amp; Reliable Service</h1>
          <p style={{
            color: 'rgba(255,255,255,0.82)',
            fontSize: 'clamp(17px,2vw,21px)',
            lineHeight: 1.55,
            margin: 0,
            maxWidth: 620,
          }}>A local, family-supported business serving Brighton, Colorado — growing one job at a time.</p>
        </div>
      </section>

      {/* STORY */}
      <section style={{ background: '#fff', padding: 'clamp(56px,8vw,104px) 0' }}>
        <div style={{ width: '100%', maxWidth: 1220, margin: '0 auto', padding: '0 clamp(18px,4vw,40px)' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
            gap: 'clamp(36px,5vw,64px)',
            alignItems: 'center',
          }}>
            <div style={{ position: 'relative' }}>
              <img
                src="/assets/photo-walkway.jpg"
                alt="Moon River Construction concrete work"
                style={{
                  width: '100%',
                  height: 'clamp(320px,46vw,500px)',
                  objectFit: 'cover',
                  borderRadius: 16,
                  display: 'block',
                  boxShadow: '0 24px 50px rgba(16,34,50,0.18)',
                }}
              />
              <div style={{
                position: 'absolute',
                bottom: -22,
                right: -8,
                background: '#102232',
                color: '#fff',
                padding: '20px 26px',
                borderRadius: 14,
                boxShadow: '0 16px 40px rgba(16,34,50,0.3)',
                display: 'flex',
                alignItems: 'center',
                gap: 14,
              }}>
                <img src="/assets/logo-icon-white.png" alt="" style={{ height: 40, width: 'auto' }} />
                <div style={{ lineHeight: 1.15 }}>
                  <div style={{
                    fontFamily: "'Barlow Semi Condensed', sans-serif",
                    fontWeight: 800,
                    fontSize: 18,
                    letterSpacing: '.5px',
                  }}>Family-Supported</div>
                  <div style={{ color: '#7BE0A6', fontSize: 13.5, fontWeight: 500 }}>Local to Brighton, CO</div>
                </div>
              </div>
            </div>

            <div>
              <div style={{
                fontFamily: "'Barlow Semi Condensed', sans-serif",
                fontWeight: 700,
                fontSize: 14,
                letterSpacing: '2.5px',
                textTransform: 'uppercase',
                color: '#2E9D5C',
                marginBottom: 12,
              }}>Our Story</div>
              <h2 style={{
                fontFamily: "'Barlow Semi Condensed', sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(26px,3.6vw,42px)',
                color: '#102232',
                lineHeight: 1.1,
                letterSpacing: '-0.4px',
                margin: '0 0 20px',
              }}>A Neighbor You Can Trust</h2>
              <p style={{ color: '#4A5862', fontSize: 'clamp(17px,1.6vw,19px)', lineHeight: 1.65, margin: '0 0 18px' }}>
                Moon River Construction is a local Brighton-based construction and outdoor service business built on hard work, referrals, and reliable service.
              </p>
              <p style={{ color: '#4A5862', fontSize: 'clamp(17px,1.6vw,19px)', lineHeight: 1.65, margin: '0 0 18px' }}>
                We serve homeowners, property managers, and contractors with concrete, landscaping, and outdoor living projects — plus full interior remodeling and home renovations — growing one job at a time.
              </p>
              <p style={{ color: '#4A5862', fontSize: 'clamp(17px,1.6vw,19px)', lineHeight: 1.65, margin: 0 }}>
                One truck now, but a reputation we're building with every project. When you call Moon River, you get an honest crew that shows up, works hard, and treats your property like our own.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section style={{ background: '#102232', padding: 'clamp(56px,8vw,104px) 0' }}>
        <div style={{ width: '100%', maxWidth: 1220, margin: '0 auto', padding: '0 clamp(18px,4vw,40px)' }}>
          <div style={{ textAlign: 'center', maxWidth: 620, margin: '0 auto 48px' }}>
            <div style={{
              fontFamily: "'Barlow Semi Condensed', sans-serif",
              fontWeight: 700,
              fontSize: 14,
              letterSpacing: '2.5px',
              textTransform: 'uppercase',
              color: '#5FCF8E',
              marginBottom: 12,
            }}>What We Stand For</div>
            <h2 style={{
              fontFamily: "'Barlow Semi Condensed', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(26px,3.6vw,42px)',
              color: '#fff',
              lineHeight: 1.1,
              letterSpacing: '-0.4px',
              margin: 0,
            }}>The Way We Work</h2>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
            gap: 14,
          }}>
            {values.map((v, i) => (
              <div key={i} style={{
                display: 'flex',
                gap: 14,
                padding: '24px 22px',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 12,
              }}>
                <div style={{
                  flexShrink: 0,
                  width: 34,
                  height: 34,
                  borderRadius: 9,
                  background: 'rgba(46,157,92,0.18)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#5FCF8E" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <div style={{
                    fontFamily: "'Barlow Semi Condensed', sans-serif",
                    fontWeight: 700,
                    fontSize: 18,
                    color: '#fff',
                    lineHeight: 1.2,
                    marginBottom: 5,
                  }}>{v.t}</div>
                  <div style={{ color: 'rgba(255,255,255,0.62)', fontSize: 14.5, lineHeight: 1.5 }}>{v.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA
        heading="Let's talk about your project"
        text="Reach out for a free, no-pressure quote from a local crew you can trust."
      />
      <Footer />
    </div>
  );
}
