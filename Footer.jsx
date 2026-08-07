import React from 'react';
import { Link } from 'react-router-dom';

const PHONE = '(720) 807-0379';

export default function Footer({ phone = PHONE }) {
  const phoneHref = 'tel:+1' + phone.replace(/[^0-9]/g, '');
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: '#0B1826', padding: 'clamp(48px,6vw,72px) 0 0', fontFamily: "'Barlow', sans-serif" }}>
      <div style={{ width: '100%', maxWidth: 1220, margin: '0 auto', padding: '0 clamp(18px,4vw,40px)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 40, paddingBottom: 46 }}>
          <div>
            <div style={{ marginBottom: 18 }}>
              <img src="/assets/logo-full-white.png" alt="Moon River Construction" style={{ height: 104, width: 'auto', display: 'block' }} />
            </div>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 15.5, lineHeight: 1.6, margin: 0, maxWidth: 300 }}>
              A local, family-supported construction, remodeling, and outdoor services business serving Brighton, Colorado and surrounding areas.
            </p>
          </div>
          <div>
            <div style={{ fontFamily: "'Barlow Semi Condensed', sans-serif", fontWeight: 700, fontSize: 14, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#fff', marginBottom: 18 }}>Services</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
              <Link to="/services" className="footer-link" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: 15.5, transition: 'color .15s ease' }}>Concrete & Hardscapes</Link>
              <Link to="/services" className="footer-link" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: 15.5, transition: 'color .15s ease' }}>Landscaping & Outdoor Living</Link>
              <Link to="/services" className="footer-link" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: 15.5, transition: 'color .15s ease' }}>Interior Remodeling</Link>
              <Link to="/services" className="footer-link" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: 15.5, transition: 'color .15s ease' }}>Home Renovations</Link>
            </div>
          </div>
          <div>
            <div style={{ fontFamily: "'Barlow Semi Condensed', sans-serif", fontWeight: 700, fontSize: 14, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#fff', marginBottom: 18 }}>Company</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
              <Link to="/about"        className="footer-link" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: 15.5, transition: 'color .15s ease' }}>About</Link>
              <Link to="/service-area" className="footer-link" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: 15.5, transition: 'color .15s ease' }}>Service Area</Link>
              <Link to="/blog"         className="footer-link" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: 15.5, transition: 'color .15s ease' }}>Blog</Link>
              <Link to="/contact"      className="footer-link" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: 15.5, transition: 'color .15s ease' }}>Request a Quote</Link>
            </div>
          </div>
          <div>
            <div style={{ fontFamily: "'Barlow Semi Condensed', sans-serif", fontWeight: 700, fontSize: 14, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#fff', marginBottom: 18 }}>Get in Touch</div>
            <a href={phoneHref} style={{ display: 'block', color: '#fff', fontFamily: "'Barlow Semi Condensed', sans-serif", fontWeight: 700, fontSize: 22, textDecoration: 'none', marginBottom: 8 }}>{phone}</a>
            <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 15.5, lineHeight: 1.6 }}>Brighton, CO<br />Serving surrounding areas</div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.09)', padding: '24px 0 30px', display: 'flex', flexWrap: 'wrap', gap: '10px 24px', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ color: 'rgba(255,255,255,0.42)', fontSize: 14 }}>© {year} Moon River Construction. All rights reserved.</div>
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', alignItems: 'center' }}>
            <Link to="/privacy-policy" style={{ color: 'rgba(255,255,255,0.42)', fontSize: 14, textDecoration: 'none', transition: 'color .15s ease' }} className="footer-link">Privacy Policy</Link>
            <Link to="/terms"          style={{ color: 'rgba(255,255,255,0.42)', fontSize: 14, textDecoration: 'none', transition: 'color .15s ease' }} className="footer-link">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
