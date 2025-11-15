// src/components/Industries.tsx
import React from 'react';
import herobanner from '../assets/media/herobanner.png';

const Industries: React.FC = () => {
  const industries = [
    { icon: 'fas fa-building', title: 'Corporate', description: 'Professional stationery, business cards, presentation materials, and corporate branding solutions.' },
    { icon: 'fas fa-graduation-cap', title: 'Education', description: 'ID cards, certificates, diplomas, educational materials, and campus signage.' },
    { icon: 'fas fa-heartbeat', title: 'Healthcare', description: 'Medical ID cards, prescription pads, patient education materials, and hospital signage.' },
    { icon: 'fas fa-utensils', title: 'Hospitality', description: 'Menus, table tents, room keys, promotional materials, and hotel branding.' },
    { icon: 'fas fa-shopping-bag', title: 'Retail', description: 'Packaging, labels, signage, promotional materials, and shopping bags.' },
    { icon: 'fas fa-ticket-alt', title: 'Entertainment', description: 'Event tickets, posters, banners, promotional items, and merchandise.' },
    { icon: 'fas fa-cogs', title: 'Manufacturing', description: 'Industrial labels, technical manuals, safety signs, and product packaging solutions.' },
    { icon: 'fas fa-hands-helping', title: 'Non-Profit', description: 'Fundraising materials, awareness banners, promotional flyers, and community event signage.' }
  ];

  return (
    <section id="industries" className="py-20 px-[5%] bg-white">
      <div className="section-header text-center mb-12">
        <h2 className="section-title text-5xl font-bold text-[#2b2101] opacity-0 animate-fadeInUp">
          Industries We Serve
          <span className="block w-20 h-1 bg-red-600 mx-auto mt-2 rounded"></span>
        </h2>

        <p className="section-description text-lg text-gray max-w-2xl mx-auto mt-5 leading-relaxed">
          Custom printing solutions for diverse business needs
        </p>
      </div>

      <div className="industries-grid grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        {industries.map((industry, index) => (
          <div key={index} className="industry-card">
            <div className="industry-icon w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-5">
              <i className={industry.icon}></i>
            </div>

            <h3 className="text-xl font-semibold mb-4 text-dark text-center">
              {industry.title}
            </h3>

            <p className="text-gray text-center leading-relaxed">
              {industry.description}
            </p>
          </div>
        ))}
      </div>

      {/* Fixed image class name */}
      <section className="floating mt-12">
        <img src={herobanner} alt="chandraa background" className="mx-auto" />
      </section>
    </section>
  );
};

export default Industries;
