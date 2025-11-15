// src/components/Footer.tsx
import React from 'react';
import logo from '../assets/media/Group 11.svg'
const Footer: React.FC = () => {
  const quickLinks = [
    { href: '#home', label: 'Home', icon: 'fas fa-chevron-right' },
    { href: '#about', label: 'About Us', icon: 'fas fa-chevron-right' },
    { href: '#services', label: 'Services', icon: 'fas fa-chevron-right' },
    { href: '#portfolio', label: 'Portfolio', icon: 'fas fa-chevron-right' },
    { href: '#contact', label: 'Contact', icon: 'fas fa-chevron-right' }
  ];

  const serviceLinks = [
    { href: '#services', label: 'Business Stationery', icon: 'fas fa-chevron-right' },
    { href: '#services', label: 'ID Card Printing', icon: 'fas fa-chevron-right' },
    { href: '#services', label: 'Promotional Products', icon: 'fas fa-chevron-right' },
    { href: '#services', label: 'Product Packaging', icon: 'fas fa-chevron-right' },
    { href: '#services', label: 'Branding Solutions', icon: 'fas fa-chevron-right' }
  ];

  return (
    <footer className="bg-dark text-white py-16 px-[5%]">
      <div className="footer-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
        {/* About Section */}
        <div className="footer-about">
          <div className="footer-logo mb-5">
            <img src={logo} alt="Chandraa Concept" className="h-12" />
          </div>
          <p className="text-white text-opacity-70 leading-7 mb-5">
            Chandraa Concepts is a premium printing service provider
            specializing in business stationery, ID cards, promotional products,
            and custom branding solutions.
          </p>
          <div className="social-links flex gap-4">
            {['facebook-f', 'instagram', 'linkedin-in', 'whatsapp'].map((platform, index) => (
              <a
                key={index}
                href="#"
                className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:bg-gold hover:text-dark"
              >
                <i className={`fab fa-${platform}`}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4 className="text-lg font-semibold mb-5 relative pb-3">Quick Links</h4>
          <ul className="space-y-3">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-white text-opacity-70 no-underline transition-all duration-300 hover:text-gold hover:translate-x-2 flex items-center gap-3"
                >
                  <i className={`${link.icon} text-gold text-sm`}></i>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services Links */}
        <div className="footer-links">
          <h4 className="text-lg font-semibold mb-5 relative pb-3">Our Services</h4>
          <ul className="space-y-3">
            {serviceLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-white text-opacity-70 no-underline transition-all duration-300 hover:text-gold hover:translate-x-2 flex items-center gap-3"
                >
                  <i className={`${link.icon} text-gold text-sm`}></i>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-newsletter">
          <h4 className="text-lg font-semibold mb-5 relative pb-3">Newsletter</h4>
          <p className="text-white text-opacity-70 mb-5">
            Subscribe to our newsletter for printing tips, exclusive offers, and
            industry insights.
          </p>
          <div className="newsletter-form flex">
            <input
              type="email"
              placeholder="Your Email Address"
              className="flex-1 p-3 border-none rounded-l-lg text-black"
            />
            <button
              type="submit"
              className="bg-gold text-dark py-3 px-5 border-none rounded-r-lg cursor-pointer transition-all duration-300 hover:bg-yellow-400"
            >
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="copyright text-center pt-8 border-t border-white border-opacity-10 text-white text-opacity-50 text-sm">
        &copy; 2023 Chandraa Concepts. All Rights Reserved.
      </div>
      <div className="copyright text-center pt-8  text-white text-opacity-50 text-sm">
        <a
          href="https://mediaweb6.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white hover:underline transition duration-300"
        >
          Powered by Mediaweb6.
        </a>
      </div>

    </footer>
  );
};

export default Footer;