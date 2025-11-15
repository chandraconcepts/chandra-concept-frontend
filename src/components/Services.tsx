// src/components/Services.tsx
import React, { useState } from 'react';
import rec36 from '../assets/media/Rectangle 36.png';
import rec37 from '../assets/media/Rectangle 37.png';
import rec38 from '../assets/media/Rectangle 38.png';
import rec39 from '../assets/media/Rectangle 39.png';
import rec40 from '../assets/media/Rectangle 40.png';
import rec41 from '../assets/media/Rectangle 41.png';

interface Service {
  id: number;
  image: string;
  title: string;
  description: string;
  details: {
    title: string;
    content: string;
  }[];
}

const Services: React.FC = () => {
  const [activeService, setActiveService] = useState<number | null>(null);


  const services: Service[] = [
    {
      id: 1,
      image: rec36,
      title: "Business Stationery",
      description: "Professional business cards, letterheads, envelopes, and more to establish your brand identity.",
      details: [
        { title: "Material Options", content: "Premium cardstock, linen, recycled paper, textured finishes" },
        { title: "Printing Techniques", content: "Offset, digital, letterpress, foil stamping" },
        { title: "Standard Sizes", content: "Business Cards: 3.5\" x 2\", Letterheads: 8.5\" x 11\", Envelopes: #10" }
      ]
    },
    {
      id: 2,
      image: rec37,
      title: "ID Card Printing",
      description: "Custom ID cards for employees, students, and members with advanced security features.",
      details: [
        { title: "Material Options", content: "PVC, composite, polyester, Teslin, holographic overlays" },
        { title: "Security Features", content: "Holograms, UV printing, microtext, barcodes, magnetic stripes" },
        { title: "Standard Sizes", content: "CR80 (3.375\" x 2.125\"), CR79, custom sizes available" }
      ]
    },
    {
      id: 3,
      image: rec38,
      title: "Promotional Products",
      description: "Custom branded merchandise to promote your business and delight your customers.",
      details: [
        { title: "Product Range", content: "Mugs, pens, t-shirts, bags, notebooks, USB drives" },
        { title: "Printing Methods", content: "Screen printing, DTG, sublimation, laser engraving, pad printing" },
        { title: "Material Options", content: "Ceramic, stainless steel, cotton, polyester, eco-friendly materials" }
      ]
    },
    {
      id: 4,
      image: rec39,
      title: "Custom Packaging",
      description: "Design and print custom packaging solutions that enhance your product presentation.",
      details: [
        { title: "Packaging Types", content: "Boxes, bags, labels, sleeves, display stands" },
        { title: "Printing Techniques", content: "Offset, flexography, digital, screen printing" },
        { title: "Material Options", content: "Cardboard, corrugated board, kraft paper, plastic, sustainable materials" }
      ]
    },
    {
      id: 5,
      image: rec40,
      title: "Large Format Printing",
      description: "High-quality large format prints for banners, signs, posters, and displays.",
      details: [
        { title: "Product Range", content: "Banners, posters, vehicle wraps, wall murals, window graphics" },
        { title: "Printing Technologies", content: "UV printing, solvent printing, eco-solvent printing, latex printing" },
        { title: "Material Options", content: "Vinyl, canvas, fabric, mesh, backlit film, adhesive-backed materials" }
      ]
    },
    {
      id: 6,
      image: rec41,
      title: "Book & Catalog Printing",
      description: "Professional book and catalog printing services for publishers and businesses.",
      details: [
        { title: "Printing Options", content: "Hardcover, softcover, perfect binding, saddle stitching, spiral binding" },
        { title: "Paper Options", content: "Coated, uncoated, matte, glossy, specialty papers" },
        { title: "Finishing Options", content: "Lamination, spot UV, foil stamping, embossing, die-cutting" }
      ]
    }
  ];

  const toggleService = (id: number) => {
    setActiveService(activeService === id ? null : id);
  };

  return (
    <section id="services" className="py-20 px-[5%] min-h-screen">
      <div className="section-header text-center mb-12">
        <h2 className="section-title text-5xl font-bold text-[#2b2101] opacity-0 animate-fadeInUp">
          Our Premium Services
          <span className="block w-20 h-1 bg-red-600 mx-auto mt-2 rounded"></span>

        </h2>
        <p className="section-description text-lg text-gray max-w-2xl mx-auto mt-5 leading-relaxed">
          Explore our comprehensive range of printing and branding solutions
        </p>
      </div>

      <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map(service => (
          <div
            key={service.id}
            className={`service-card ${activeService === service.id ? 'active' : ''}`}
          >
            <div className="service-image h-48 overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="service-content p-6">
              <h3 className="text-xl font-semibold mb-3 text-primary">{service.title}</h3>
              <p className="text-gray mb-4 leading-relaxed">{service.description}</p>

              <div className={`service-details overflow-hidden transition-all duration-300 ${activeService === service.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                {service.details.map((detail, index) => (
                  <div key={index} className="detail-item mb-4 pb-4 border-b border-gray-200 last:border-b-0 last:mb-0 last:pb-0">
                    <h4 className="text-base font-semibold mb-2 text-dark">{detail.title}</h4>
                    <p className="text-sm text-gray">{detail.content}</p>
                  </div>
                ))}
              </div>

              <button
                className="toggle-details flex items-center justify-center bg-primary text-white w-10 h-10 rounded-full cursor-pointer mx-auto mt-4 transition-all duration-300 hover:bg-gold hover:text-dark"
                onClick={() => toggleService(service.id)}
              >
                <i className={`fas fa-chevron-down transition-transform duration-300 ${activeService === service.id ? 'rotate-180' : ''
                  }`}></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;