// src/App.tsx
import React from 'react';
import { Helmet } from "react-helmet-async";

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import Industries from './components/Industries';
import Portfolio from './components/Portfolio';
import Materials from './components/Materials';
import Techniques from './components/Techniques';
import Visualization from './components/Visualization';
import ServiceMap from './components/ServiceMap';
import Designs from './components/Designs';
import Pricing from './components/Pricing';
import OrderProcess from './components/OrderProcess';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="App">

      {/* ======================================
          🌐 GLOBAL SEO — ALWAYS ON EVERY PAGE
         ====================================== */}
      <Helmet>
        <title>MediaWeb6 – Printing, Designing & Branding Solutions</title>

        <meta
          name="description"
          content="MediaWeb6 offers premium printing, designing, branding, packaging, promotional materials, large format printing, and digital visualization services using advanced technology."
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.mediaweb6.com/" />

        {/* Keywords */}
        <meta
          name="keywords"
          content="printing services, branding solutions, design studio, digital printing, UV printing, packaging design, graphic designing, promotional items, large format printing"
        />

        {/* OG Tags (Facebook, LinkedIn) */}
        <meta property="og:title" content="MediaWeb6 – Printing & Branding Services" />
        <meta property="og:description" content="Premium printing, design, branding, packaging & visualization services." />
        <meta property="og:image" content="https://www.mediaweb6.com/seo-banner.jpg" />
        <meta property="og:url" content="https://www.mediaweb6.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter SEO */}
        <meta name="twitter:title" content="MediaWeb6 – Printing & Branding Services" />
        <meta name="twitter:description" content="High-quality printing, branding, packaging & visualization." />
        <meta name="twitter:image" content="https://www.mediaweb6.com/seo-banner.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <Navbar />
      <Hero />

      {/* 
        ⭐ If you want:
        - Page-wise dynamic SEO
        - SEOWISE scrolling updates
        - JSON-LD schema per section

        Tell me:   "Enable full dynamic SEO"
      */}

      <About />
      <Services />
      <Process />
      <Industries />
      <Portfolio />
      <Materials />
      <Techniques />
      <Visualization />
      <ServiceMap />
      <Designs />
      <Pricing />
      <OrderProcess />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
