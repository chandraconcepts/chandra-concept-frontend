// src/components/Hero.tsx
import React, { useState, useEffect } from 'react';
  import img1 from '../assets/media/conceptbackground.png';
  import img2 from '../assets/media/umberlabackground.png';
  import img3 from '../assets/media/herobanner.png';
const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);



  const images = [
    img1,img2,img3
   
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const changeBackground = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="h-screen flex flex-col justify-center items-center text-center text-white px-[5%] relative overflow-hidden">
      <div className="background-container absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        {images.map((image, index) => (
          <div
            key={index}
            className={`background-slide absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-1500 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
        <div className="overlay absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 z-0"></div>
      </div>

      <div className="hero-content max-w-4xl z-10 p-5 bg-black bg-opacity-40 rounded-2xl backdrop-blur-sm animate-fadeInUp">
        <h1 className="text-4xl md:text-5xl mb-5 font-bold">Premium Printing Solutions for Your Business</h1>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
          Transform your brand with our expert printing services, innovative
          designs, and premium quality materials.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button 
            className="cta-button bg-gold text-black py-4 px-8 rounded-full text-lg font-semibold cursor-pointer transition-all duration-300 shadow-lg hover:bg-yellow-400 hover:-translate-y-1"
            onClick={changeBackground}
          >
            Change Background
          </button>
          <button 
            className="cta-button bg-gold text-black py-4 px-8 rounded-full text-lg font-semibold cursor-pointer transition-all duration-300 shadow-lg hover:bg-yellow-400 hover:-translate-y-1"
            onClick={scrollToContact}
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;