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

export default function Terms({ phone }) {
  return (
    <div style={{ overflowX: 'hidden', background: '#fff' }}>
      <Head>
        <title>Terms &amp; Conditions | Moon River Construction</title>
        <meta name="description" content="Terms and conditions for using moonriverconstructionco.com and requesting services from Moon River Construction in Brighton, CO." />
      </Head>
      <Header phone={phone} />

      {/* HERO */}
      <section style={{ background: '#102232', padding: 'clamp(54px,8vw,92px) 0 clamp(40px,5vw,60px)' }}>
        <div style={{ width: '100%', maxWidth: 1220, margin: '0 auto', padding: '0 clamp(18px,4vw,40px)' }}>
          <div style={{ fontFamily: "'Barlow Semi Condensed', sans-serif", fontWeight: 700, fontSize: 14, letterSpacing: '2.5px', textTransform: 'uppercase', color: '#5FCF8E', marginBottom: 14 }}>Legal</div>
          <h1 style={{ fontFamily: "'Barlow Semi Condensed', sans-serif", fontWeight: 800, color: '#fff', fontSize: 'clamp(34px,5.2vw,52px)', lineHeight: 1.05, letterSpacing: '-0.5px', margin: '0 0 16px' }}>Terms & Conditions</h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 15, margin: 0 }}>Last updated: June 20, 2025</p>
        </div>
      </section>

      {/* CONTENT */}
      <section style={{ padding: 'clamp(48px,7vw,96px) 0' }}>
        <div style={{ width: '100%', maxWidth: 780, margin: '0 auto', padding: '0 clamp(18px,4vw,40px)' }}>

          <Section title="Acceptance of Terms">
            By accessing and using <strong>moonriverconstruction.com</strong> (the "Site"), you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use this Site.
          </Section>

          <Section title="About Moon River Construction Co">
            Moon River Construction Co is a locally owned construction and outdoor services business based in Brighton, Colorado. We provide concrete, sprinkler repair, and sod installation services to residential homeowners, property managers, realtors, and contractors in the Brighton area and surrounding communities.
          </Section>

          <Section title="SMS Messaging Program">
            By submitting your phone number on this Site, you agree to receive SMS text messages from <strong>Moon River Construction Co</strong> regarding your quote request, project updates, scheduling, and related service communications.
            <ul style={{ marginTop: 12, paddingLeft: 22, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <li><strong>Message types:</strong> Quote follow-ups, appointment confirmations, project updates, and customer service responses.</li>
              <li><strong>To opt out:</strong> Reply <strong>STOP</strong> at any time to cancel SMS messages from us. You will receive a one-time confirmation message and no further messages will be sent.</li>
              <li><strong>To re-subscribe:</strong> If you have opted out and wish to receive messages again, reply <strong>START</strong> or contact us directly at (303) 901-0048.</li>
              <li><strong>For help:</strong> Reply <strong>HELP</strong> or contact us at (303) 901-0048 or through our website contact form.</li>
              <li><strong>Message frequency:</strong> Message frequency will vary based on your project and communication needs.</li>
              <li><strong>Rates:</strong> Message and data rates may apply for messages sent to you from us and to us from you. Check with your mobile carrier for details.</li>
              <li><strong>Carrier disclaimer:</strong> Carriers are not liable for delayed or undelivered messages.</li>
            </ul>
            <p style={{ marginTop: 14 }}>
              For more information on how we handle your data, please review our{' '}
              <Link to="/privacy-policy" style={{ color: '#2E9D5C', fontWeight: 600 }}>Privacy Policy</Link>.
            </p>
          </Section>

          <Section title="Use of This Website">
            You agree to use this Site only for lawful purposes and in a manner that does not infringe the rights of others. You may not:
            <ul style={{ marginTop: 10, paddingLeft: 22, display: 'flex', flexDirection: 'column', gap: 6 }}>
              <li>Use the Site to transmit spam or unsolicited messages</li>
              <li>Attempt to gain unauthorized access to any part of the Site</li>
              <li>Use automated tools to scrape or harvest content from the Site</li>
              <li>Misrepresent your identity when submitting a quote request</li>
            </ul>
          </Section>

          <Section title="Age Restriction">
            You must be at least 18 years old to use our website, submit forms, request services, or opt in to receive SMS communications from Moon River Construction Co. By using this website or submitting your information, you confirm that you are 18 years of age or older.
          </Section>

          <Section title="Quote Requests & Services">
            Submitting a quote request through our contact form does not constitute a binding contract or guarantee of service. All quotes are subject to:
            <ul style={{ marginTop: 10, paddingLeft: 22, display: 'flex', flexDirection: 'column', gap: 6 }}>
              <li>On-site assessment and crew availability</li>
              <li>Mutual agreement on scope and pricing</li>
              <li>A signed service agreement before work begins</li>
            </ul>
            <p style={{ marginTop: 12 }}>Prices, availability, and service areas are subject to change without notice.</p>
          </Section>

          <Section title="Accuracy of Information">
            We make reasonable efforts to keep content on this Site accurate and up to date. However, we do not warrant that all information is complete, current, or error-free. Service descriptions, coverage areas, and pricing are provided for general guidance only.
          </Section>

          <Section title="Intellectual Property">
            All content on this Site — including text, photos, logos, and graphics — is the property of Moon River Construction Co or its content suppliers and is protected by applicable copyright and trademark laws. You may not reproduce, distribute, or create derivative works without our written permission.
          </Section>

          <Section title="Disclaimer of Warranties">
            This Site is provided on an "as is" and "as available" basis without warranties of any kind, express or implied. We do not warrant that the Site will be uninterrupted, error-free, or free of viruses or other harmful components.
          </Section>

          <Section title="Limitation of Liability">
            To the fullest extent permitted by law, Moon River Construction Co shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of this Site or the information contained on it.
          </Section>

          <Section title="Governing Law">
            These Terms and Conditions are governed by the laws of the State of <strong>Colorado</strong>, without regard to its conflict of law provisions. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts located in Adams County, Colorado.
          </Section>

          <Section title="Compliance">
            Moon River Construction Co operates its SMS messaging program in compliance with applicable federal and state laws, including the Telephone Consumer Protection Act (TCPA) and industry standards set by the CTIA. We do not send messages containing prohibited content including but not limited to phishing, illegal substances, or deceptive marketing.
          </Section>

          <Section title="Changes to These Terms">
            We reserve the right to update these Terms and Conditions at any time. Changes will be posted on this page with an updated date. Continued use of the Site after changes are posted constitutes your acceptance of the revised terms.
          </Section>

          <Section title="Contact Us">
            If you have questions about these Terms and Conditions, please reach out:
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
