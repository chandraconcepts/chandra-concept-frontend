// src/components/Materials.tsx
import React from 'react';

import rect72 from "../assets/media/Rectangle 72.png";
import rect73 from "../assets/media/Rectangle 73.png";
import rect74 from "../assets/media/Rectangle 74.png";
import rect75 from "../assets/media/Rectangle 75.png";
import rect76 from "../assets/media/Rectangle 76.png";
import rect77 from "../assets/media/Rectangle 77.png";
import { Helmet } from 'react-helmet-async';


const Materials: React.FC = () => {
  const materials = [
    {
      image: rect72,
      badge: "GSM: 300",
      title: "Premium Cardstock",
      specs: [
        { label: "Thickness", value: "0.3mm" },
        { label: "Min Quantity", value: "250 pcs" },
        { label: "Finish", value: "Matte" }
      ],
      description:
        "Our premium cardstock is perfect for business cards, invitations, and premium stationery. Made from sustainably sourced paper with a smooth matte finish that feels luxurious to the touch."
    },
    {
      image: rect73,
      badge: "GSM: 250",
      title: "Linen Textured Paper",
      specs: [
        { label: "Thickness", value: "0.25mm" },
        { label: "Min Quantity", value: "500 pcs" },
        { label: "Finish", value: "Textured" }
      ],
      description:
        "Linen textured paper adds a sophisticated feel to your printed materials. The subtle cross-hatch pattern creates visual interest and provides an elegant tactile experience for recipients."
    },
    {
      image: rect74,
      badge: "GSM: 220",
      title: "Eco Recycled Paper",
      specs: [
        { label: "Thickness", value: "0.22mm" },
        { label: "Min Quantity", value: "100 pcs" },
        { label: "Finish", value: "Natural" }
      ],
      description:
        "Our eco-friendly recycled paper is made from 100% post-consumer waste. It features a natural, slightly textured surface that showcases your commitment to sustainability."
    },
    {
      image: rect75,
      badge: "Thickness: 0.2mm",
      title: "Premium Vinyl",
      specs: [
        { label: "Durability", value: "5+ years" },
        { label: "Applications", value: "Stickers, decals" },
        { label: "Finish", value: "Glossy" }
      ],
      description:
        "High-quality vinyl material perfect for stickers, decals, and labels. Features excellent weather resistance and vibrant color reproduction for indoor and outdoor use."
    },
    {
      image: rect76,
      badge: "Weight: 380 GSM",
      title: "Art Canvas",
      specs: [
        { label: "Texture", value: "Medium" },
        { label: "Stretch", value: "Gallery Wrap" },
        { label: "Finish", value: "Matte" }
      ],
      description:
        "Premium art canvas for high-quality prints. The medium texture provides excellent detail reproduction and the matte finish reduces glare for optimal viewing."
    },
    {
      image: rect77,
      badge: "Thickness: 0.1mm",
      title: "Transparent Film",
      specs: [
        { label: "Clarity", value: "95%" },
        { label: "Applications", value: "Overlays, windows" },
        { label: "Adhesive", value: "Static cling" }
      ],
      description:
        "Crystal clear film perfect for window graphics, overlays, and protective coverings. The static cling application allows for easy repositioning without residue."
    }
  ];
  return (
    <section id="materials" className="py-20 px-[5%]">
      <Helmet>
        <title>Printing Materials & Specifications | Premium Paper, Vinyl, Canvas | Chandraa Concepts</title>

        <meta
          name="description"
          content="Explore premium printing materials including cardstock, textured paper, recycled paper, vinyl, canvas, and transparent films. View GSM, thickness, finishes, and usage specs for each material."
        />

        <meta
          name="keywords"
          content="printing materials, cardstock GSM, textured paper, recycled paper, vinyl stickers, canvas prints, transparent film printing, printing specs, Chandraa Concepts materials"
        />

        <link rel="canonical" href="https://www.chandraaconcepts.com/materials" />

        {/* Open Graph SEO */}
        <meta property="og:title" content="Printing Materials & Specifications | Chandraa Concepts" />
        <meta
          property="og:description"
          content="Premium printing materials with detailed specifications: GSM, texture, finish, durability, and recommended applications."
        />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1581091012184-5c3d7c353d62?auto=format&fit=crop&w=800&q=80"
        />
        <meta property="og:url" content="https://www.chandraaconcepts.com/materials" />
        <meta property="og:type" content="website" />

        {/* Twitter SEO */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Premium Printing Materials | High-Quality Paper, Vinyl & Canvas"
        />
        <meta
          name="twitter:description"
          content="Discover high-end materials for printing: premium paper, eco-friendly options, vinyl, art canvas, and transparent films."
        />
        <meta
          name="twitter:image"
          content="https://images.unsplash.com/photo-1581091012184-5c3d7c353d62?auto=format&fit=crop&w=800&q=80"
        />
      </Helmet>
      <div className="section-header text-center mb-12">
        <h2 className="section-title text-5xl font-bold text-[#2b2101] opacity-0 animate-fadeInUp">
          Printing Materials & Specifications
          <span className="block w-20 h-1 bg-red-600 mx-auto mt-2 rounded"></span>

        </h2>
        <p className="section-description text-lg text-gray max-w-2xl mx-auto mt-5 leading-relaxed">
          Explore our premium materials and their specifications for your printing needs
        </p>
      </div>

      <div className="materials-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {materials.map((material, index) => (
          <div key={index} className="material-card">
            <div className="material-image h-48 relative overflow-hidden">
              <img
                src={material.image}
                alt={material.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
              <div className="material-badge absolute top-4 right-4 bg-gold text-dark py-1 px-4 rounded-full font-semibold text-sm">
                {material.badge}
              </div>
            </div>

            <div className="material-content p-6">
              <h3 className="text-2xl font-bold mb-4 text-primary">{material.title}</h3>

              <div className="material-specs flex flex-wrap gap-4 my-5">
                {material.specs.map((spec, specIndex) => (
                  <div
                    key={specIndex}
                    className="spec-item flex-1 min-w-32 text-center p-3 bg-lightGray rounded-lg"
                  >

                    <h4 className="text-sm text-gray mb-1">{spec.label}</h4>
                    <p className="font-semibold text-dark">{spec.value}</p>
                  </div>
                ))}
              </div>


              <div className="material-details mt-5 pt-5 border-t border-gray-200">
                <p className="text-gray leading-relaxed">{material.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Materials;