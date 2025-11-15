// src/components/Technology.tsx
import React from 'react';

const Technology: React.FC = () => {
  const technologies = [
    {
      icon: 'fas fa-print',
      title: 'Digital Presses',
      description: 'State-of-the-art digital presses for high-quality, quick-turnaround printing with exceptional color accuracy.'
    },
    {
      icon: 'fas fa-tint',
      title: 'UV Printing',
      description: 'Eco-friendly UV printing technology that dries instantly and produces vibrant, durable prints.'
    },
    {
      icon: 'fas fa-ruler-combined',
      title: 'Precision Cutting',
      description: 'Computer-controlled cutting systems for perfect die-cutting and finishing of all printed materials.'
    }
  ];

  return (
    <section id="technology" className="py-20 px-[5%] bg-gradient-to-br from-dark to-gray-900 text-white">
      <div className="section-header text-center mb-12">
        <h2 className="section-title text-4xl text-white mb-4 relative inline-block">
          Cutting-Edge Printing Technology
        </h2>
        <p className="section-description text-lg text-gray-300 max-w-2xl mx-auto mt-5 leading-relaxed">
          We use the latest printing technology to deliver superior results
        </p>
      </div>

      <div className="technology-grid grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        {technologies.map((tech, index) => (
          <div 
            key={index} 
            className="tech-card bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 text-center border border-gold border-opacity-20 transition-all duration-300 hover:-translate-y-2 hover:bg-opacity-15"
          >
            <div className="tech-icon text-5xl text-primary mb-5">
              <i className={tech.icon}></i>
            </div>
            <h3 className="text-xl font-semibold mb-4">{tech.title}</h3>
            <p className="text-gray-300 leading-relaxed">{tech.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technology;