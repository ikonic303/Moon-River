import React from 'react';
import { Link } from 'react-router-dom';
import { Head } from 'vite-react-ssg';
import Header from './Header';
import CTA from './CTA';
import Footer from './Footer';
import { SERVICE_PAGES, CORE_TOWNS } from './lib/service-pages.js';

const PHONE = '(720) 807-0379';
const ORIGIN = 'https://www.moonriverconstructionco.com';
const HEAD_FONT = "'Barlow Semi Condensed', sans-serif";
const WRAP = { width: '100%', maxWidth: 1220, margin: '0 auto', padding: '0 clamp(18px,4vw,40px)' };

const STEPS = [
  { t: 'Call or send a request', d: 'Call (720) 807-0379 or use the quote form. We usually get back to you the same day.' },
  { t: 'We look at the site', d: 'Somebody comes out and sees the actual job before a number exists. The quote is free, with no obligation.' },
  { t: 'One crew, start to finish', d: 'If the job touches more than one trade, like a patio that needs the irrigation moved, it’s one crew and one point of contact.' },
];

const Eyebrow = ({ children, light = false }) => (
  <div style={{ fontFamily: HEAD_FONT, fontWeight: 700, fontSize: 14, letterSpacing: '2.5px', textTransform: 'uppercase', color: light ? '#5FCF8E' : '#2E9D5C', marginBottom: 12 }}>{children}</div>
);

const H2 = ({ children, light = false, style }) => (
  <h2 style={{ fontFamily: HEAD_FONT, fontWeight: 800, fontSize: 'clamp(28px,4vw,44px)', color: light ? '#fff' : '#102232', lineHeight: 1.08, letterSpacing: '-0.4px', margin: '0 0 16px', ...style }}>{children}</h2>
);

const Arrow = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
);

const textLink = { display: 'inline-flex', alignItems: 'center', gap: 7, color: '#2E9D5C', fontFamily: HEAD_FONT, fontWeight: 700, fontSize: 17, textDecoration: 'none' };

export default function ServicePage({ service, phone = PHONE }) {
  const s = SERVICE_PAGES[service];
  const url = `${ORIGIN}${s.path}`;
  const image = `${ORIGIN}${s.ogImage}`;
  const phoneHref = 'tel:+1' + phone.replace(/[^0-9]/g, '');
  const others = Object.values(SERVICE_PAGES).filter((o) => o.key !== s.key);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: s.h1,
        serviceType: s.serviceType,
        description: s.description,
        url,
        image,
        provider: {
          '@type': 'GeneralContractor',
          name: 'Moon River Construction',
          telephone: phone,
          url: `${ORIGIN}/`,
        },
        areaServed: CORE_TOWNS.map((t) => ({ '@type': 'City', name: `${t.name}, CO` })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${ORIGIN}/` },
          { '@type': 'ListItem', position: 2, name: 'Services', item: `${ORIGIN}/services` },
          { '@type': 'ListItem', position: 3, name: s.name, item: url },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: s.faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
  };

  return (
    <div style={{ overflowX: 'hidden', background: '#fff' }}>
      <Head>
        <title>{s.title}</title>
        <meta name="description" content={s.description} />
        <link rel="canonical" href={url} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={s.title} />
        <meta property="og:description" content={s.description} />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content="Moon River Construction" />
        <meta property="og:image" content={image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={s.title} />
        <meta name="twitter:description" content={s.description} />
        <meta name="twitter:image" content={image} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Head>
      <Header active="services" phone={phone} />

      {/* HERO */}
      <section style={{
        position: 'relative',
        backgroundImage: `linear-gradient(100deg, rgba(9,20,32,0.94) 0%, rgba(9,20,32,0.74) 100%), url('${s.heroImage}')`,
        backgroundSize: 'cover', backgroundPosition: s.heroPosition,
        padding: 'clamp(56px,10vw,108px) 0',
      }}>
        <div style={WRAP}>
          <nav aria-label="Breadcrumb" style={{ fontSize: 14.5, color: 'rgba(255,255,255,0.62)', marginBottom: 22 }}>
            <Link to="/" style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 8px' }}>›</span>
            <Link to="/services" style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none' }}>Services</Link>
            <span style={{ margin: '0 8px' }}>›</span>
            <span aria-current="page" style={{ color: '#fff' }}>{s.name}</span>
          </nav>
          <Eyebrow light>{s.eyebrow}</Eyebrow>
          <h1 style={{ fontFamily: HEAD_FONT, fontWeight: 800, color: '#fff', fontSize: 'clamp(34px,5.2vw,58px)', lineHeight: 1.05, letterSpacing: '-0.5px', margin: '0 0 18px', maxWidth: 820, textWrap: 'balance' }}>{s.h1}</h1>
          <p style={{ color: 'rgba(255,255,255,0.84)', fontSize: 'clamp(17px,2vw,20px)', lineHeight: 1.6, margin: '0 0 30px', maxWidth: 680 }}>{s.intro}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
            <Link to="/contact" className="btn-green" style={{
              display: 'inline-flex', alignItems: 'center', gap: 10, background: '#2E9D5C', color: '#fff',
              fontFamily: HEAD_FONT, fontWeight: 700, fontSize: 18, letterSpacing: '.3px',
              padding: '15px 26px', borderRadius: 9, textDecoration: 'none',
              transition: 'background .18s ease, transform .18s ease',
            }}>Get a Free Quote <Arrow size={17} /></Link>
            <a href={phoneHref} className="btn-orange" style={{
              display: 'inline-flex', alignItems: 'center', gap: 10, background: '#E07A36', color: '#fff',
              fontFamily: HEAD_FONT, fontWeight: 700, fontSize: 18, letterSpacing: '.3px',
              padding: '15px 26px', borderRadius: 9, textDecoration: 'none',
              transition: 'background .18s ease, transform .18s ease',
            }}>Call {phone}</a>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section style={{ background: '#fff', padding: 'clamp(56px,8vw,100px) 0' }}>
        <div style={WRAP}>
          <div style={{ maxWidth: 700, marginBottom: 36 }}>
            <Eyebrow>{s.name}</Eyebrow>
            <H2>{s.itemsHeading}</H2>
            <p style={{ color: '#4A5862', fontSize: 'clamp(16px,1.6vw,19px)', lineHeight: 1.65, margin: 0 }}>{s.itemsIntro}</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))', gap: 16 }}>
            {s.items.map((item) => (
              <div key={item.t} style={{ background: '#fff', border: '1px solid #E6EAE8', borderRadius: 14, padding: '24px 24px 26px', boxShadow: '0 1px 3px rgba(16,34,50,0.05)' }}>
                <div style={{ width: 38, height: 38, borderRadius: 10, background: '#EAF6EF', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#2E9D5C" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <h3 style={{ fontFamily: HEAD_FONT, fontWeight: 800, fontSize: 21, color: '#102232', margin: '0 0 8px' }}>{item.t}</h3>
                <p style={{ color: '#4A5862', fontSize: 16, lineHeight: 1.65, margin: 0 }}>{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCAL CONDITIONS + GUIDES */}
      <section style={{ background: '#F4F6F5', padding: 'clamp(56px,8vw,100px) 0' }}>
        <div style={WRAP}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 'clamp(36px,5vw,64px)', alignItems: 'start' }}>
            <div>
              <Eyebrow>{s.info.eyebrow}</Eyebrow>
              <H2>{s.info.heading}</H2>
              {s.info.paragraphs.map((p, i) => (
                <p key={i} style={{ color: '#4A5862', fontSize: 'clamp(16px,1.6vw,18px)', lineHeight: 1.7, margin: '0 0 16px' }}>{p}</p>
              ))}
              <div style={{ marginTop: 28, background: '#fff', border: '1px solid #E6EAE8', borderRadius: 14, padding: '22px 24px' }}>
                <div style={{ fontFamily: HEAD_FONT, fontWeight: 800, fontSize: 19, color: '#102232', marginBottom: 12 }}>Guides from our blog</div>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 11 }}>
                  {s.guides.map((g) => (
                    <li key={g.slug}>
                      <Link to={`/blog/${g.slug}`} style={{ color: '#1F7A47', fontWeight: 600, fontSize: 16, lineHeight: 1.45, textDecoration: 'underline', textDecorationColor: 'rgba(46,157,92,0.4)', textUnderlineOffset: 3 }}>{g.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <img src={s.info.image} alt={s.info.imageAlt} loading="lazy" style={{ width: '100%', height: 'clamp(300px,42vw,520px)', objectFit: 'cover', borderRadius: 16, display: 'block', boxShadow: '0 24px 50px rgba(16,34,50,0.16)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ background: '#102232', padding: 'clamp(56px,8vw,100px) 0' }}>
        <div style={WRAP}>
          <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 44px' }}>
            <Eyebrow light>How It Works</Eyebrow>
            <H2 light style={{ margin: 0 }}>From first call to finished job</H2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))', gap: 16 }}>
            {STEPS.map((step, i) => (
              <div key={step.t} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 14, padding: '26px 24px' }}>
                <div style={{ fontFamily: HEAD_FONT, fontWeight: 800, fontSize: 15, letterSpacing: '1.5px', color: '#5FCF8E', marginBottom: 10 }}>STEP {i + 1}</div>
                <h3 style={{ fontFamily: HEAD_FONT, fontWeight: 800, fontSize: 22, color: '#fff', margin: '0 0 8px' }}>{step.t}</h3>
                <p style={{ color: 'rgba(255,255,255,0.68)', fontSize: 16, lineHeight: 1.6, margin: 0 }}>{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section style={{ background: '#fff', padding: 'clamp(56px,8vw,96px) 0' }}>
        <div style={WRAP}>
          <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 40px' }}>
            <Eyebrow>Customer Reviews</Eyebrow>
            <H2 style={{ margin: 0 }}>What customers say on Google</H2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 18, maxWidth: 980, margin: '0 auto' }}>
            {s.reviews.map((r) => (
              <figure key={r.name} style={{ margin: 0, background: '#F4F6F5', border: '1px solid #E6EAE8', borderRadius: 14, padding: '28px 28px 24px' }}>
                <svg width="30" height="30" viewBox="0 0 24 24" fill="#2E9D5C" aria-hidden="true" style={{ opacity: 0.85, marginBottom: 10 }}>
                  <path d="M9.5 6C6.5 7 4.5 9.6 4.5 13v5h6v-6H7.6c.2-2 1.4-3.5 3.2-4.2L9.5 6zm9 0c-3 1-5 3.6-5 7v5h6v-6h-2.9c.2-2 1.4-3.5 3.2-4.2L18.5 6z"/>
                </svg>
                <blockquote style={{ margin: '0 0 16px', color: '#33404A', fontSize: 18, lineHeight: 1.6 }}>{r.text}</blockquote>
                <figcaption style={{ color: '#5C6873', fontSize: 15 }}><strong style={{ color: '#102232' }}>{r.name}</strong> · Google review</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: '#F4F6F5', padding: 'clamp(56px,8vw,96px) 0' }}>
        <div style={{ ...WRAP, maxWidth: 900 }}>
          <Eyebrow>FAQ</Eyebrow>
          <H2 style={{ marginBottom: 28 }}>{s.name} questions we get</H2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {s.faqs.map((f) => (
              <div key={f.q} style={{ background: '#fff', border: '1px solid #E6EAE8', borderRadius: 12, padding: '22px 24px' }}>
                <h3 style={{ fontFamily: HEAD_FONT, fontWeight: 800, fontSize: 20, color: '#102232', margin: '0 0 8px' }}>{f.q}</h3>
                <p style={{ color: '#4A5862', fontSize: 16.5, lineHeight: 1.7, margin: 0 }}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHERE WE WORK + OTHER SERVICES */}
      <section style={{ background: '#fff', padding: 'clamp(56px,8vw,96px) 0' }}>
        <div style={WRAP}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 'clamp(36px,5vw,64px)' }}>
            <div>
              <Eyebrow>Where We Work</Eyebrow>
              <H2 style={{ fontSize: 'clamp(26px,3.4vw,38px)' }}>{s.name} near Brighton</H2>
              <p style={{ color: '#4A5862', fontSize: 17, lineHeight: 1.65, margin: '0 0 20px' }}>Based in Brighton, we work most weeks within about 15 miles of home:</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 9, marginBottom: 22 }}>
                {CORE_TOWNS.map((t) => (
                  <a key={t.slug} href={`/service-area/${t.slug}`} style={{ background: '#F4F6F5', border: '1px solid #E6EAE8', color: '#102232', fontWeight: 600, fontSize: 15, padding: '8px 14px', borderRadius: 30, textDecoration: 'none' }}>{t.name}</a>
                ))}
              </div>
              <Link to="/service-area" className="read-story" style={textLink}>See the full service area <Arrow /></Link>
            </div>
            <div>
              <Eyebrow>Other Services</Eyebrow>
              <H2 style={{ fontSize: 'clamp(26px,3.4vw,38px)' }}>One crew for the whole project</H2>
              <p style={{ color: '#4A5862', fontSize: 17, lineHeight: 1.65, margin: '0 0 20px' }}>Concrete, sprinklers, sod, landscaping and interior remodeling, handled by the same local crew.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-start' }}>
                {others.map((o) => (
                  <Link key={o.key} to={o.path} className="read-story" style={textLink}>{o.name} <Arrow /></Link>
                ))}
                <Link to="/services" className="read-story" style={textLink}>All services <Arrow /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA phone={phone} heading={s.ctaHeading} text="Free on-site quote, no obligation. Call or send a request and we usually get back to you the same day." />
      <Footer phone={phone} />
    </div>
  );
}
