// src/App.tsx
import React from 'react';
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
import Technology from './components/Technology';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import OrderProcess from './components/OrderProcess';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
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
      {/* <Technology /> */}
      <OrderProcess/>
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;