
import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import About from './components/about/About';
import HowItWorks from './components/howitworks/HowItWorks';
import Services from './components/services/Services';
import Testimonials from './components/testimonial/Testimonial';
import WhyUs from './components/whyus/WhyUs';
import FAQ from './components/faq/FAQ';
import Home from './components/view/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/services" element={<Services />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/why-us" element={<WhyUs />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;