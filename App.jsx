import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Services from './Services';
import About from './About';
import ServiceArea from './ServiceArea';
import Contact from './Contact';
import './index.css';

const PHONE = '(303) 901-0048';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/"             element={<Home        phone={PHONE} />} />
        <Route path="/services"     element={<Services    phone={PHONE} />} />
        <Route path="/about"        element={<About       phone={PHONE} />} />
        <Route path="/service-area" element={<ServiceArea phone={PHONE} />} />
        <Route path="/contact"      element={<Contact     phone={PHONE} />} />
      </Routes>
    </HashRouter>
  );
}
