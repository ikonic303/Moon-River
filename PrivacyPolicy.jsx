import React from 'react';
import { Link } from 'react-router-dom';
import { Head } from 'vite-react-ssg';
import Header from './Header';
import Footer from './Footer';

const Section = ({ title, children }) => (
  <div style={{ marginBottom: 40 }}>
    <h2 style={{ fontFamily: "'Barlow Semi Condensed', sans-serif", fontWeight: 700, fontSize: 22, color: '#102232', margin: '0 0 12px' }}>{title}</h2>
    <div style={{ color: '#4A5862', fontSize: 17, lineHeight: 1.75 }}>{children}</div>
  </div>
);

export default function PrivacyPolicy({ phone }) {
  return (
    <div style={{ overflowX: 'hidden', background: '#fff' }}>
      <Head>
        <title>Privacy Policy | Moon River Construction</title>
        <meta name="description" content="How Moon River Construction collects, uses, and protects your information when you visit moonriverconstructionco.com or request a quote." />
      </Head>
      <Header phone={phone} />

      {/* HERO */}
      <section style={{ background: '#102232', padding: 'clamp(54px,8vw,92px) 0 clamp(40px,5vw,60px)' }}>
        <div style={{ width: '100%', maxWidth: 1220, margin: '0 auto', padding: '0 clamp(18px,4vw,40px)' }}>
          <div style={{ fontFamily: "'Barlow Semi Condensed', sans-serif", fontWeight: 700, fontSize: 14, letterSpacing: '2.5px', textTransform: 'uppercase', color: '#5FCF8E', marginBottom: 14 }}>Legal</div>
          <h1 style={{ fontFamily: "'Barlow Semi Condensed', sans-serif", fontWeight: 800, color: '#fff', fontSize: 'clamp(34px,5.2vw,52px)', lineHeight: 1.05, letterSpacing: '-0.5px', margin: '0 0 16px' }}>Privacy Policy</h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 15, margin: 0 }}>Last updated: July 31, 2026</p>
        </div>
      </section>

      {/* CONTENT */}
      <section style={{ padding: 'clamp(48px,7vw,96px) 0' }}>
        <div style={{ width: '100%', maxWidth: 780, margin: '0 auto', padding: '0 clamp(18px,4vw,40px)' }}>

          <p style={{ color: '#4A5862', fontSize: 17, lineHeight: 1.75, marginBottom: 40 }}>
            This Privacy Policy describes how Moon River Construction Co ("Moon River Construction," "we," "us," or "our") collects, uses, and protects information when you visit our website at <strong>moonriverconstructionco.com</strong> (the "Site") or contact us through our forms, phone, or other channels. By using our Site or submitting information to us, you agree to the practices described in this Privacy Policy.
          </p>

          <Section title="Information We Collect">
            <p style={{ marginBottom: 8, fontWeight: 600, color: '#102232' }}>Information you provide directly:</p>
            <ul style={{ marginTop: 0, marginBottom: 16, paddingLeft: 22, display: 'flex', flexDirection: 'column', gap: 6 }}>
              <li>Full name</li>
              <li>Phone number</li>
              <li>Email address</li>
              <li>Project address, city, or ZIP code</li>
              <li>Details about your project or service request</li>
              <li>Any other information you choose to share when contacting us or requesting a quote</li>
            </ul>
            <p style={{ marginBottom: 8, fontWeight: 600, color: '#102232' }}>Information collected automatically:</p>
            <ul style={{ marginTop: 0, paddingLeft: 22, display: 'flex', flexDirection: 'column', gap: 6 }}>
              <li>IP address</li>
              <li>Browser type and device information</li>
              <li>Pages visited and time spent on our Site</li>
              <li>Referring website or advertisement that led you to our Site</li>
              <li>General location data (city/region level)</li>
            </ul>
            <p style={{ marginTop: 12 }}>We do not knowingly collect information from children under 13.</p>
          </Section>

          <Section title="Cookies and Tracking Technologies">
            Our Site uses cookies, pixels, and similar tracking technologies to understand how visitors use our Site and to improve our advertising effectiveness. This includes:
            <ul style={{ marginTop: 10, marginBottom: 12, paddingLeft: 22, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <li><strong>Meta (Facebook/Instagram) Pixel</strong> — helps us understand which ads led visitors to our Site and measure the effectiveness of our advertising campaigns. Meta may use this data in accordance with its own privacy policy, available at facebook.com/privacy/policy.</li>
              <li><strong>Conversions API</strong> — a secure, server-side method we may use to share certain website and form-submission events with Meta for advertising measurement purposes.</li>
              <li><strong>Standard analytics cookies</strong> — used to understand general Site traffic and performance.</li>
            </ul>
            <p style={{ marginBottom: 12 }}>These technologies may collect information such as pages viewed, actions taken on our Site (such as submitting a contact form), and general device/browser information. This data helps us show relevant ads to people who may be interested in our services and measure how well our advertising is performing.</p>
            <p>
              You can control cookies through your browser settings, including blocking or deleting them. Note that disabling cookies may affect how certain features of our Site function. You can also visit{' '}
              <a href="https://www.facebook.com/help/568137493302217" target="_blank" rel="noopener noreferrer" style={{ color: '#2E9D5C', fontWeight: 600 }}>facebook.com/help/568137493302217</a>{' '}
              to learn how to manage how Meta uses your data for advertising.
            </p>
          </Section>

          <Section title="How We Use Your Information">
            We use the information we collect to:
            <ul style={{ marginTop: 10, paddingLeft: 22, display: 'flex', flexDirection: 'column', gap: 6 }}>
              <li>Respond to your quote requests and inquiries</li>
              <li>Contact you by phone, text (SMS), or email regarding your project</li>
              <li>Schedule estimates and consultations</li>
              <li>Provide, operate, and improve our services</li>
              <li>Measure and improve the performance of our advertising, including ads run through Meta (Facebook/Instagram)</li>
              <li>Maintain records of customer communications and project history</li>
              <li>Comply with legal obligations</li>
            </ul>
          </Section>

          <Section title="SMS and Email Communications">
            By submitting your contact information through our website, forms, or advertisements, you consent to receive calls, text messages (SMS), and emails from Moon River Construction related to your inquiry or project.
            <div style={{ margin: '16px 0', background: '#F4F6F5', border: '1px solid #E6EAE8', borderRadius: 12, padding: '18px 22px', fontWeight: 500, color: '#102232' }}>
              Message and data rates may apply. Message frequency may vary.
            </div>
            You can opt out of text messages at any time by replying <strong>STOP</strong>. You can opt out of emails at any time by using the unsubscribe link included in our emails.
          </Section>

          <Section title="How We Share Information">
            We do not sell your personal information. We may share information with:
            <ul style={{ marginTop: 10, paddingLeft: 22, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <li><strong>Service providers</strong> who help us operate our business, such as our customer relationship management (CRM) platform (e.g., GoHighLevel), scheduling tools, and communication providers.</li>
              <li><strong>Advertising partners</strong>, such as Meta, to help us measure and improve advertising performance (as described above).</li>
              <li><strong>Legal authorities</strong>, if required by law, regulation, or legal process.</li>
            </ul>
            <p style={{ marginTop: 12 }}>We do not share your information with unrelated third parties for their own marketing purposes.</p>
          </Section>

          <Section title="Data Retention">
            We retain your information for as long as necessary to respond to your inquiry, provide our services, maintain business records, and comply with legal obligations.
          </Section>

          <Section title="Your Choices and Rights">
            Depending on your state of residence, you may have rights regarding your personal information, which may include the right to:
            <ul style={{ marginTop: 10, paddingLeft: 22, display: 'flex', flexDirection: 'column', gap: 6 }}>
              <li>Request access to the information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt out of certain data uses, including targeted advertising</li>
            </ul>
            <p style={{ marginTop: 12 }}>To exercise any of these rights, contact us using the information below.</p>
          </Section>

          <Section title="Third-Party Links">
            Our Site may contain links to third-party websites. We are not responsible for the privacy practices or content of those websites. We encourage you to review the privacy policies of any third-party sites you visit.
          </Section>

          <Section title="Security">
            We take reasonable measures to protect the information we collect. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.
          </Section>

          <Section title="Changes to This Privacy Policy">
            We may update this Privacy Policy from time to time. The updated version will be indicated by a revised "Last updated" date at the top of this page. We encourage you to review this policy periodically.
          </Section>

          <Section title="Contact Us">
            If you have questions about this Privacy Policy or how we handle your information, please contact us:
            <div style={{ marginTop: 14, background: '#F4F6F5', border: '1px solid #E6EAE8', borderRadius: 12, padding: '20px 24px' }}>
              <div style={{ fontFamily: "'Barlow Semi Condensed', sans-serif", fontWeight: 700, fontSize: 18, color: '#102232', marginBottom: 6 }}>Moon River Construction Co</div>
              <div>Brighton, Colorado</div>
              <div style={{ marginTop: 4 }}>
                <a href="tel:+17208070379" style={{ color: '#2E9D5C', textDecoration: 'none', fontWeight: 600 }}>(720) 807-0379</a>
              </div>
              <div style={{ marginTop: 4 }}>
                <Link to="/contact" style={{ color: '#2E9D5C', textDecoration: 'none', fontWeight: 600 }}>Contact page</Link>
              </div>
            </div>
          </Section>

        </div>
      </section>

      <Footer phone={phone} />
    </div>
  );
}
