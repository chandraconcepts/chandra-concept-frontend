// src/components/Navbar.tsx
import React, { useState, useEffect } from 'react';
import logo from '../assets/media/Group 11.svg'
const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let current = 'home';

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute('id') || 'home';
        }
      });

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#contact', label: 'Contact' }
  ];

  const dropdownLinks = [
    { href: '#process', label: 'Process' },
    { href: '#industries', label: 'Industries' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#materials', label: 'Materials' },
    { href: '#techniques', label: 'Techniques' },
    { href: '#visualization', label: 'Visualization' },
    { href: '#designs', label: 'Designs' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#faq', label: 'FAQ' }
  ];

  return (
    <nav className="flex justify-between items-center py-4 px-[5%] bg-dark sticky top-0 z-50 shadow-lg">
      <a href="#home" className="logo">
        <img src={logo} alt="Chandraa Concept" className="h-12" />
      </a>

      <div className={`nav-links flex gap-6 ${isMenuOpen ? 'active' : ''}`}>
        <div className="dropdown relative inline-block">
         <button className="bg-gray text-white text-base py-3 px-5 cursor-pointer rounded transition-all duration-300 hover:bg-gray-700 shadow-md hover:shadow-lg">
  More
</button>

          <div className="dropdown-content">
            {dropdownLinks.map(link => (
              <a 
                key={link.href} 
                href={link.href}
                className="text-gray py-3 px-4 no-underline block transition-colors duration-200 hover:bg-gray-100"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        
        {navLinks.map(link => (
          <a 
            key={link.href}
            href={link.href}
            className={`nav-link ${activeSection === link.href.substring(1) ? 'text-gold active' : 'text-light'}`}
          >
            {link.label}
          </a>
        ))}
      </div>

      <div className="mobile-menu-btn text-white text-2xl cursor-pointer md:hidden" onClick={toggleMenu}>
        <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`} id="menu-icon"></i>
      </div>
    </nav>
  );
};

export default Navbar;