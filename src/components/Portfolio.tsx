// src/components/Portfolio.tsx
import React from 'react';
import branding1 from '../assets/media/branding/1.jpeg';
import branding2 from '../assets/media/branding/2.jpeg';
import branding3 from '../assets/media/branding/3.jpeg';
import branding4 from '../assets/media/branding/4.jpeg';
import idcard1 from '../assets/media/idcard/1.jpeg';
import idcard2 from '../assets/media/idcard/2.jpeg';
import idcard3 from '../assets/media/idcard/3.jpeg';
import idcard4 from '../assets/media/idcard/4.jpeg';
import idcard5 from '../assets/media/idcard/5.jpeg';
import idcard6 from '../assets/media/idcard/6.jpeg';
import stationery1 from '../assets/media/stationery/1.jpeg';
import stationery2 from '../assets/media/stationery/2.jpeg';
import stationery3 from '../assets/media/stationery/3.jpeg';
import stationery4 from '../assets/media/stationery/4.jpeg';
import stationery5 from '../assets/media/stationery/5.jpeg';
import stationery6 from '../assets/media/stationery/6.jpeg';




const Portfolio: React.FC = () => {
  const galleryImages = [
    branding1,
    branding2,
    branding3,
    branding4,
    idcard1,
    idcard2,
    idcard3,
    idcard4,
    idcard5,
    idcard6,
    stationery1,
    stationery2,
    stationery3,
    stationery4,
    stationery5,
    stationery6
  ];


  return (
    <section id="portfolio" className="py-20 px-[5%]">
      <div className="section-header text-center mb-12">
        <h2 className="section-title text-5xl font-bold text-[#2b2101] opacity-0 animate-fadeInUp">
          Our Work Showcase
          <span className="block w-20 h-1 bg-red-600 mx-auto mt-2 rounded"></span>

        </h2>
        <p className="section-description text-lg text-gray max-w-2xl mx-auto mt-5 leading-relaxed">
          Explore our latest printing & branding projects
        </p>
      </div>

      <div className="pinterest-gallery flex flex-wrap gap-6 justify-center max-h-screen overflow-y-auto p-4">
        {galleryImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Work Sample ${index + 1}`}
            className="gallery-item w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.33%-1rem)] rounded-lg transition-transform duration-300 hover:scale-105"
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;