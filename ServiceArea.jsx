import React, { useState } from 'react';
import { Head } from 'vite-react-ssg';
import Header from './Header';
import CTA from './CTA';
import Footer from './Footer';
import data from './lib/service-area-towns.json';

const ORIGIN = 'https://www.moonriverconstructionco.com';
const URL = `${ORIGIN}/service-area`;
const TITLE = 'Service Area | Moon River Construction — Brighton, CO & the Front Range';
const DESC = 'Moon River Construction serves Brighton and communities across the Colorado Front Range with concrete, landscaping, sprinkler systems, remodeling, flooring and interior painting. Free quotes.';

const TIER_LABEL = {
  core: ['Core service area', 'Within 15 miles of Brighton — where we are working most weeks.'],
  metro: ['Metro area', '15 to 35 miles out — a routine drive, scheduled in our normal week.'],
  extended: ['Extended area', '35 to 60 miles out — scheduled in blocks rather than single visits.'],
  outer: ['By arrangement', 'Over 60 miles from Brighton — taken on for projects large enough to justify the haul. We will say so before you book.'],
};

const { towns } = data;
const groups = ['core', 'metro', 'extended', 'outer'].map((k) => [k, towns.filter((t) => t.tier === k).sort((a, b) => a.mi - b.mi)]);

const jsonLd = [
  {
    '@context': 'https://schema.org', '@type': 'CollectionPage', name: 'Service Area', url: URL,
    about: { '@type': 'GeneralContractor', name: 'Moon River Construction', telephone: '(720) 807-0379', url: `${ORIGIN}/`, areaServed: 'Colorado Front Range' },
  },
  {
    '@context': 'https://schema.org', '@type': 'ItemList', numberOfItems: towns.length,
    itemListElement: towns.map((t, i) => ({ '@type': 'ListItem', position: i + 1, name: `${t.name}, CO`, url: `${ORIGIN}/service-area/${t.slug}` })),
  },
  {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${ORIGIN}/` },
      { '@type': 'ListItem', position: 2, name: 'Service Area', item: URL },
    ],
  },
];

const TownCard = ({ t }) => (
  <a href={`/service-area/${t.slug}`} style={{ display: 'block', background: '#fff', border: '1px solid #e4e9ee', borderRadius: 9, padding: '13px 16px', textDecoration: 'none' }}>
    <span style={{ fontFamily: "'Barlow Semi Condensed', sans-serif", fontWeight: 700, fontSize: 17, color: '#102232', display: 'block' }}>{t.name}</span>
    <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: 13.5, color: '#7b8894' }}>{t.mi === 0 ? 'Home base' : `${t.mi} mi ${t.dir}`}</span>
  </a>
);

const SERVICE_AREA_CSS = `
.sa-select { -webkit-appearance:none; appearance:none; }
@media (max-width: 560px) {
  .sa-tier-grid { grid-template-columns: repeat(auto-fill,minmax(150px,1fr)) !important; }
  .sa-tier-heading { display:flex; flex-direction:column; align-items:flex-start; gap:4px; }
  .sa-hero-actions a { flex: 1 1 auto; text-align:center; justify-content:center; }
}
`;

function TownJump() {
  const [value, setValue] = useState('');
  const onChange = (e) => {
    const v = e.target.value;
    setValue(v);
    if (v) window.location.href = v;
  };
  return (
    <div style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.18)', borderRadius: 10, padding: '16px 18px', maxWidth: 420 }}>
      <label htmlFor="sa-town-jump" style={{ display: 'block', fontFamily: "'Barlow Semi Condensed', sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: '1px', textTransform: 'uppercase', color: '#7BE0A6', marginBottom: 8 }}>Find your town</label>
      <select
        id="sa-town-jump"
        className="sa-select"
        value={value}
        onChange={onChange}
        style={{
          width: '100%', minHeight: 46, background: '#0f2233', color: '#fff',
          border: '1px solid rgba(255,255,255,0.25)', borderRadius: 7,
          fontFamily: "'Barlow', sans-serif", fontSize: 16, padding: '10px 14px',
        }}
      >
        <option value="">Jump to your town&hellip;</option>
        {groups.map(([k, list]) => (
          <optgroup key={k} label={TIER_LABEL[k][0]}>
            {list.slice().sort((a, b) => a.name.localeCompare(b.name)).map((t) => (
              <option key={t.slug} value={`/service-area/${t.slug}`}>
                {t.name}{t.mi === 0 ? ' (home base)' : ` — ${t.mi} mi ${t.dir}`}
              </option>
            ))}
          </optgroup>
        ))}
      </select>
    </div>
  );
}

export default function ServiceArea({ phone }) {
  return (
    <div style={{ overflowX: 'hidden', background: '#fff' }}>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESC} />
        <link rel="canonical" href={URL} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESC} />
        <meta property="og:url" content={URL} />
        <meta property="og:site_name" content="Moon River Construction" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESC} />
        {jsonLd.map((o, i) => (
          <script key={i} type="application/ld+json">{JSON.stringify(o)}</script>
        ))}
      </Head>
      <Header active="area" phone={phone} />
      <style>{SERVICE_AREA_CSS}</style>

      <section style={{ background: 'linear-gradient(180deg,#102232 0%,#16324a 100%)', padding: 'clamp(56px,8vw,96px) 0' }}>
        <div style={{ width: '100%', maxWidth: 1220, margin: '0 auto', padding: '0 clamp(18px,4vw,40px)' }}>
          <h1 style={{ fontFamily: "'Barlow Semi Condensed', sans-serif", fontWeight: 800, color: '#fff', fontSize: 'clamp(34px,5.2vw,58px)', lineHeight: 1.05, letterSpacing: '-0.5px', margin: '0 0 18px', maxWidth: 820 }}>Serving Brighton &amp; the Colorado Front Range</h1>
          <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: 19, lineHeight: 1.7, color: 'rgba(255,255,255,0.82)', maxWidth: 780, margin: '0 0 28px' }}>We are based in Brighton and we work outward from there. Below is every Front Range municipality we cover, grouped by how far it actually is from our home base — because the honest answer to &ldquo;do you come out here?&rdquo; depends on the drive, and we would rather tell you that up front than after you have booked.</p>
          <div className="sa-hero-actions" style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 28 }}>
            <a href="/contact" style={{ display: 'inline-flex', alignItems: 'center', background: '#2E9D5C', color: '#fff', fontFamily: "'Barlow Semi Condensed', sans-serif", fontWeight: 700, fontSize: 16, padding: '14px 24px', borderRadius: 7, textDecoration: 'none' }}>Get a Free Quote</a>
            <a href={'tel:+1' + phone.replace(/[^0-9]/g, '')} style={{ display: 'inline-flex', alignItems: 'center', background: '#E8702A', color: '#fff', fontFamily: "'Barlow Semi Condensed', sans-serif", fontWeight: 700, fontSize: 16, padding: '14px 24px', borderRadius: 7, textDecoration: 'none' }}>{phone}</a>
          </div>
          <TownJump />
        </div>
      </section>

      {groups.map(([k, list]) => (
        <section key={k} style={{ padding: 'clamp(44px,6vw,72px) 0', background: k === 'metro' || k === 'outer' ? '#f6f8fa' : '#fff' }}>
          <div style={{ width: '100%', maxWidth: 1220, margin: '0 auto', padding: '0 clamp(18px,4vw,40px)' }}>
            <h2 className="sa-tier-heading" style={{ fontFamily: "'Barlow Semi Condensed', sans-serif", fontWeight: 800, fontSize: 'clamp(24px,3.2vw,36px)', color: '#102232', margin: '0 0 8px' }}>
              <span>{TIER_LABEL[k][0]}</span> <span style={{ fontWeight: 600, color: '#7b8894', fontSize: '0.6em' }}>{list.length} communities</span>
            </h2>
            <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: 17, lineHeight: 1.7, color: '#4a5866', margin: '0 0 22px', maxWidth: 760 }}>{TIER_LABEL[k][1]}</p>
            <div className="sa-tier-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(210px,1fr))', gap: 10 }}>
              {list.map((t) => <TownCard key={t.slug} t={t} />)}
            </div>
          </div>
        </section>
      ))}

      <section style={{ padding: 'clamp(44px,6vw,68px) 0', background: '#fff' }}>
        <div style={{ width: '100%', maxWidth: 900, margin: '0 auto', padding: '0 clamp(18px,4vw,40px)' }}>
          <h2 style={{ fontFamily: "'Barlow Semi Condensed', sans-serif", fontWeight: 800, fontSize: 'clamp(24px,3.2vw,36px)', color: '#102232', margin: '0 0 16px' }}>Also nearby</h2>
          <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: 17.5, lineHeight: 1.75, color: '#3d4c5a', margin: 0 }}>We work regularly in Henderson, Todd Creek and Reunion as well. Those are unincorporated communities rather than towns of their own, so they do not have their own page here — but they are close to home and we are in them often.</p>
        </div>
      </section>

      <CTA
        phone={phone}
        heading="Don't see your town?"
        text="Call and ask. If it is a haul we will say so, and if it is a job we are right for we will come look at it. Quotes are free either way."
      />
      <Footer phone={phone} />
    </div>
  );
}
