// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Process from "./components/Process";
import Industries from "./components/Industries";
import Portfolio from "./components/Portfolio";
import Materials from "./components/Materials";
import Techniques from "./components/Techniques";
import Visualization from "./components/Visualization";
import ServiceMap from "./components/ServiceMap";
import Designs from "./components/Designs";
import Pricing from "./components/Pricing";
import OrderProcess from "./components/OrderProcess";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const HomePage = () => (
  <>
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
    <OrderProcess />
    <FAQ />
    <Contact />
  </>
);

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/process" element={<Process />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/materials" element={<Materials />} />
        <Route path="/techniques" element={<Techniques />} />
        <Route path="/visualization" element={<Visualization />} />
        <Route path="/servicemap" element={<ServiceMap />} />
        <Route path="/designs" element={<Designs />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/orderprocess" element={<OrderProcess />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<h1 className="text-center p-10">404 - Page Not Found</h1>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
