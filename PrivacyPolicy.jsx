import React from 'react';
import { Link } from 'react-router-dom';
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
      <Header phone={phone} />

      {/* HERO */}
      <section style={{ background: '#102232', padding: 'clamp(54px,8vw,92px) 0 clamp(40px,5vw,60px)' }}>
        <div style={{ width: '100%', maxWidth: 1220, margin: '0 auto', padding: '0 clamp(18px,4vw,40px)' }}>
          <div style={{ fontFamily: "'Barlow Semi Condensed', sans-serif", fontWeight: 700, fontSize: 14, letterSpacing: '2.5px', textTransform: 'uppercase', color: '#5FCF8E', marginBottom: 14 }}>Legal</div>
          <h1 style={{ fontFamily: "'Barlow Semi Condensed', sans-serif", fontWeight: 800, color: '#fff', fontSize: 'clamp(34px,5.2vw,52px)', lineHeight: 1.05, letterSpacing: '-0.5px', margin: '0 0 16px' }}>Privacy Policy</h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 15, margin: 0 }}>Last updated: June 20, 2025</p>
        </div>
      </section>

      {/* CONTENT */}
      <section style={{ padding: 'clamp(48px,7vw,96px) 0' }}>
        <div style={{ width: '100%', maxWidth: 780, margin: '0 auto', padding: '0 clamp(18px,4vw,40px)' }}>

          <Section title="Overview">
            Moon River Construction Co ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard information when you visit <strong>moonriverconstruction.com</strong> or submit a quote request through our contact form.
          </Section>

          <Section title="Information We Collect">
            When you fill out our contact or quote request form, we may collect:
            <ul style={{ marginTop: 10, paddingLeft: 22, display: 'flex', flexDirection: 'column', gap: 6 }}>
              <li>Your name</li>
              <li>Phone number</li>
              <li>Email address</li>
              <li>Type of service requested</li>
              <li>Project details you provide</li>
              <li>Preferred contact method</li>
            </ul>
            <p style={{ marginTop: 12 }}>We do not collect any payment information on this website.</p>
          </Section>

          <Section title="SMS / Text Message Communications">
            By submitting your phone number through our contact form, you may opt in to receive SMS text messages from Moon River Construction Co regarding your quote request, project updates, or follow-up communications.
            <div style={{ margin: '16px 0', background: '#F4F6F5', border: '1px solid #E6EAE8', borderRadius: 12, padding: '18px 22px', fontWeight: 500, color: '#102232' }}>
              No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. Opt-in consent and mobile data will not be sold, rented, or shared. Information sharing with subcontractors in support of service delivery (such as scheduling or customer service) is permitted.
            </div>
            You can opt out of SMS messages at any time by replying <strong>STOP</strong>. For help, reply <strong>HELP</strong> or contact us directly at (303) 901-0048. Message and data rates may apply.
          </Section>

          <Section title="How We Use Your Information">
            Information you submit is used solely to:
            <ul style={{ marginTop: 10, paddingLeft: 22, display: 'flex', flexDirection: 'column', gap: 6 }}>
              <li>Respond to your quote request</li>
              <li>Contact you about your project via phone, email, or SMS</li>
              <li>Schedule estimates or follow-up communications</li>
            </ul>
            <p style={{ marginTop: 12 }}>We do not sell, rent, or share your personal information with third-party marketers.</p>
          </Section>

          <Section title="Third-Party Services">
            Our contact form is powered by <strong>GoHighLevel</strong>, a CRM platform we use to manage leads and customer communications. Information submitted through the form is stored in GoHighLevel's systems and is subject to their privacy practices. We use this platform solely to follow up on your quote request and manage project communications.
          </Section>

          <Section title="Cookies & Analytics">
            Our website may use basic browser cookies to support functionality. We do not currently use third-party analytics tracking. If this changes, this policy will be updated accordingly.
          </Section>

          <Section title="Data Retention">
            We retain your contact information for as long as necessary to complete your project or respond to your inquiry. You may request deletion of your information at any time by contacting us directly.
          </Section>

          <Section title="Data Security Practices">
            Moon River Construction Co takes reasonable administrative, technical, and physical measures to protect personal information from unauthorized access, use, disclosure, alteration, or destruction. We limit access to personal information to authorized personnel and service providers who need it to provide our services, communicate with customers, and support business operations. While no system can be guaranteed 100% secure, we make reasonable efforts to protect the information submitted through our website, forms, and communication channels.
          </Section>

          <Section title="Your Rights">
            You have the right to:
            <ul style={{ marginTop: 10, paddingLeft: 22, display: 'flex', flexDirection: 'column', gap: 6 }}>
              <li>Request access to the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt out of SMS or email communications at any time</li>
            </ul>
          </Section>

          <Section title="Children's Privacy">
            Our website is not directed at children under 13. We do not knowingly collect personal information from children.
          </Section>

          <Section title="Changes to This Policy">
            We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated date. Continued use of the site after changes constitutes acceptance of the updated policy.
          </Section>

          <Section title="Contact Us">
            If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:
            <div style={{ marginTop: 14, background: '#F4F6F5', border: '1px solid #E6EAE8', borderRadius: 12, padding: '20px 24px' }}>
              <div style={{ fontFamily: "'Barlow Semi Condensed', sans-serif", fontWeight: 700, fontSize: 18, color: '#102232', marginBottom: 6 }}>Moon River Construction Co</div>
              <div>Brighton, Colorado</div>
              <div style={{ marginTop: 4 }}>
                <a href="tel:+13039010048" style={{ color: '#2E9D5C', textDecoration: 'none', fontWeight: 600 }}>(303) 901-0048</a>
              </div>
            </div>
          </Section>

        </div>
      </section>

      <Footer phone={phone} />
    </div>
  );
}
