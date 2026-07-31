import React, { useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './Home';
import Services from './Services';
import About from './About';
import ServiceArea from './ServiceArea';
import Contact from './Contact';
import Blog from './Blog';
import Post from './Post';
import PrivacyPolicy from './PrivacyPolicy';
import Terms from './Terms';
import './index.css';

const PHONE = '(303) 901-0048';

function PixelPageView() {
  const { pathname } = useLocation();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (typeof fbq !== 'undefined') {
      fbq('track', 'PageView');
    }
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <PixelPageView />
      <Routes>
        <Route path="/"             element={<Home        phone={PHONE} />} />
        <Route path="/services"     element={<Services    phone={PHONE} />} />
        <Route path="/about"        element={<About       phone={PHONE} />} />
        <Route path="/service-area" element={<ServiceArea phone={PHONE} />} />
        <Route path="/contact"        element={<Contact       phone={PHONE} />} />
        <Route path="/blog"           element={<Blog          phone={PHONE} />} />
        <Route path="/blog/:slug"     element={<Post          phone={PHONE} />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy phone={PHONE} />} />
        <Route path="/terms"          element={<Terms         phone={PHONE} />} />
      </Routes>
    </BrowserRouter>
  );
}
