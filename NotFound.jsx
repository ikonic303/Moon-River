import React from 'react';
import { Link } from 'react-router-dom';
import { Head } from 'vite-react-ssg';
import Header from './Header';
import Footer from './Footer';

export default function NotFound({ phone }) {
  return (
    <div style={{ overflowX: 'hidden', background: '#fff' }}>
      <Head>
        <title>Page Not Found | Moon River Construction</title>
        <meta name="description" content="The page you're looking for doesn't exist. Visit Moon River Construction's homepage for concrete, landscaping, and remodeling services in Brighton, CO." />
        <meta name="robots" content="noindex" />
      </Head>
      <Header phone={phone} />

      <section style={{ padding: 'clamp(90px,14vw,150px) 0', minHeight: 400, textAlign: 'center' }}>
        <div style={{ maxWidth: 560, margin: '0 auto', padding: '0 clamp(18px,4vw,40px)' }}>
          <div style={{ fontFamily: "'Barlow Semi Condensed', sans-serif", fontWeight: 800, fontSize: 'clamp(48px,8vw,84px)', color: '#E6EAE8', lineHeight: 1, margin: '0 0 8px' }}>404</div>
          <h1 style={{ fontFamily: "'Barlow Semi Condensed', sans-serif", fontWeight: 800, fontSize: 32, color: '#102232', margin: '0 0 12px' }}>Page Not Found</h1>
          <p style={{ color: '#5C6873', fontSize: 17, margin: '0 0 28px' }}>
            The page you're looking for may have been moved or doesn't exist. Here are some helpful links instead.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
            <Link to="/" className="btn-green" style={{ display: 'inline-flex', alignItems: 'center', gap: 9, background: '#2E9D5C', color: '#fff', fontFamily: "'Barlow Semi Condensed', sans-serif", fontWeight: 700, fontSize: 17, padding: '13px 22px', borderRadius: 8, textDecoration: 'none' }}>Back to Home</Link>
            <Link to="/services" style={{ display: 'inline-flex', alignItems: 'center', gap: 9, background: '#F4F6F5', border: '1px solid #E6EAE8', color: '#102232', fontFamily: "'Barlow Semi Condensed', sans-serif", fontWeight: 700, fontSize: 17, padding: '13px 22px', borderRadius: 8, textDecoration: 'none' }}>View Services</Link>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 9, background: '#F4F6F5', border: '1px solid #E6EAE8', color: '#102232', fontFamily: "'Barlow Semi Condensed', sans-serif", fontWeight: 700, fontSize: 17, padding: '13px 22px', borderRadius: 8, textDecoration: 'none' }}>Contact Us</Link>
          </div>
        </div>
      </section>

      <Footer phone={phone} />
    </div>
  );
}
