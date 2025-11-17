// src/components/Navbar.tsx
import React, { useState, useEffect } from "react";
import logo from "../assets/media/Group 11.svg";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (id: string, path: string) => {
    // 1. Update URL to pretty route
    navigate(path);

    // 2. Scroll to section after the page updates
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 50);

    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "home";
      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.clientHeight;
        if (window.scrollY >= top - height / 3) {
          current = section.getAttribute("id") || "home";
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "home", label: "Home", path: "/" },
    { id: "about", label: "About", path: "/about" },
    { id: "services", label: "Services", path: "/services" },
    { id: "contact", label: "Contact", path: "/contact" },
  ];

  const dropdownLinks = [
    { id: "process", label: "Process", path: "/process" },
    { id: "industries", label: "Industries", path: "/industries" },
    { id: "portfolio", label: "Portfolio", path: "/portfolio" },
    { id: "materials", label: "Materials", path: "/materials" },
    { id: "techniques", label: "Techniques", path: "/techniques" },
    { id: "visualization", label: "Visualization", path: "/visualization" },
    { id: "designs", label: "Designs", path: "/designs" },
    { id: "pricing", label: "Pricing", path: "/pricing" },
    { id: "orderprocess", label: "Order Process", path: "/orderprocess" },
    { id: "faq", label: "FAQ", path: "/faq" },
  ];

  return (
    <nav className="flex justify-between items-center py-4 px-[5%] bg-dark sticky top-0 z-50 shadow-lg">
      <button onClick={() => scrollToSection("home", "/")}>
        <img src={logo} alt="MediaWeb6" className="h-12" />
      </button>

      <div className="nav-links flex gap-6 relative">
        <div className="dropdown group relative inline-block">
          <button className="bg-gray text-white text-base py-3 px-5 cursor-pointer rounded hover:bg-gray-700 shadow-md">
            More
          </button>

          {/* Dropdown */}
          <div className="dropdown-content absolute left-0 top-full mt-2 bg-white shadow-lg rounded opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-200 z-50">
            {dropdownLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id, link.path)}
                className="text-gray py-3 px-4 block hover:bg-gray-100 text-left w-full"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>

        {navLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => scrollToSection(link.id, link.path)}
            className={`nav-link ${activeSection === link.id ? "text-gold active" : "text-light"
              } hover:text-gold`}

          >
            {link.label}
          </button>
        ))}
      </div>

      {/* Mobile menu icon */}
      <div
        className="mobile-menu-btn text-white text-2xl cursor-pointer md:hidden"
        onClick={toggleMenu}
      >
        <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-full right-0 bg-dark w-48 shadow-lg flex flex-col">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id, link.path)}
              className="text-light py-3 px-4 text-left hover:bg-gray-700"
            >
              {link.label}
            </button>
          ))}
          <div className="border-t border-gray-600"></div>
          {dropdownLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id, link.path)}
              className="text-light py-3 px-4 text-left hover:bg-gray-700"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
