import React, { useEffect } from 'react';
import { Head } from 'vite-react-ssg';
import Header from './Header';
import Footer from './Footer';

const PHONE = '(720) 807-0379';

export default function Contact({ phone = PHONE }) {
  const phoneHref = 'tel:+1' + phone.replace(/[^0-9]/g, '');

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://links.ikonicmarketing303.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      if (document.body.contains(script)) document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (typeof fbq !== 'undefined') {
      fbq('track', 'Lead');
    }
  }, []);

  return (
    <div style={{ overflowX: 'hidden', background: '#fff' }}>
      <Head>
        <title>Contact Us | Free Quote | Brighton, CO</title>
        <meta name="description" content="Request a free, no-pressure quote from Moon River Construction. Call, text, or fill out our form — we serve Brighton, CO and nearby areas." />
      </Head>
      <Header active="contact" phone={phone} />

      {/* PAGE HERO */}
      <section style={{ background: '#102232', padding: 'clamp(54px,8vw,92px) 0 clamp(40px,5vw,60px)' }}>
        <div style={{ width: '100%', maxWidth: 1220, margin: '0 auto', padding: '0 clamp(18px,4vw,40px)' }}>
          <div style={{ fontFamily: "'Barlow Semi Condensed', sans-serif", fontWeight: 700, fontSize: 14, letterSpacing: '2.5px', textTransform: 'uppercase', color: '#5FCF8E', marginBottom: 14 }}>Contact Us</div>
          <h1 style={{ fontFamily: "'Barlow Semi Condensed', sans-serif", fontWeight: 800, color: '#fff', fontSize: 'clamp(34px,5.2vw,58px)', lineHeight: 1.05, letterSpacing: '-0.5px', margin: '0 0 16px', maxWidth: 760 }}>Request a Free Quote</h1>
          <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: 'clamp(17px,2vw,21px)', lineHeight: 1.55, margin: 0, maxWidth: 600 }}>Call, text, or fill out the form. We'll get back to you as soon as possible with a free, no-pressure quote.</p>
        </div>
      </section>

      {/* FORM */}
      <section style={{ background: '#F4F6F5', padding: 'clamp(48px,7vw,96px) 0' }}>
        <div style={{ width: '100%', maxWidth: 980, margin: '0 auto', padding: '0 clamp(18px,4vw,40px)' }}>
          <div style={{ background: '#fff', border: '1px solid #E6EAE8', borderRadius: 20, overflow: 'hidden', boxShadow: '0 24px 60px rgba(16,34,50,0.1)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))' }}>

            {/* Sidebar */}
            <div style={{ background: '#102232', padding: 'clamp(34px,5vw,52px)', color: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ fontFamily: "'Barlow Semi Condensed', sans-serif", fontWeight: 700, fontSize: 14, letterSpacing: '2.5px', textTransform: 'uppercase', color: '#5FCF8E', marginBottom: 14 }}>Get in Touch</div>
              <h2 style={{ fontFamily: "'Barlow Semi Condensed', sans-serif", fontWeight: 800, fontSize: 'clamp(26px,3.4vw,38px)', lineHeight: 1.08, letterSpacing: '-0.3px', margin: '0 0 16px' }}>Tell Us About Your Project</h2>
              <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: 17, lineHeight: 1.6, margin: '0 0 28px' }}>The more detail you share, the faster we can get you an accurate quote.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <a href={phoneHref} style={{ display: 'inline-flex', alignItems: 'center', gap: 13, textDecoration: 'none', color: '#fff' }}>
                  <span style={{ flexShrink: 0, width: 44, height: 44, borderRadius: 11, background: 'rgba(224,122,54,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F0A877" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </span>
                  <span>
                    <span style={{ display: 'block', fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>Call or text</span>
                    <span style={{ fontFamily: "'Barlow Semi Condensed', sans-serif", fontWeight: 700, fontSize: 21 }}>{phone}</span>
                  </span>
                </a>
                <div style={{ display: 'flex', alignItems: 'center', gap: 13 }}>
                  <span style={{ flexShrink: 0, width: 44, height: 44, borderRadius: 11, background: 'rgba(46,157,92,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5FCF8E" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="2.6"/>
                    </svg>
                  </span>
                  <span>
                    <span style={{ display: 'block', fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>Based in</span>
                    <span style={{ fontFamily: "'Barlow Semi Condensed', sans-serif", fontWeight: 700, fontSize: 21 }}>Brighton, CO</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Embedded GHL form */}
            <div style={{ minHeight: 1047 }}>
              <iframe
                src="https://links.ikonicmarketing303.com/widget/form/7eTbLk8DXh94lcFz84OR"
                style={{ width: '100%', height: '1047px', border: 'none', borderRadius: 3 }}
                id="inline-7eTbLk8DXh94lcFz84OR"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Solar Lead Form"
                data-height="1047"
                data-layout-iframe-id="inline-7eTbLk8DXh94lcFz84OR"
                data-form-id="7eTbLk8DXh94lcFz84OR"
                title="Solar Lead Form"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer phone={phone} />
    </div>
  );
}
