// src/components/Designs.tsx
import React from 'react';
import design78 from "../assets/media/Rectangle 78.png";
import design79 from "../assets/media/Rectangle 79.png";
import design80 from "../assets/media/Rectangle 80.png";
import design81 from "../assets/media/Rectangle 81.png";

const Designs: React.FC = () => {
  const designs = [
  {
    image: design78,
    title: "Minimalist Elegance",
    description:
      "Clean, simple designs with ample white space and subtle typography for a sophisticated look.",
    projects: "250+",
    rating: "4.8",
  },
  {
    image: design79,
    title: "Vibrant & Bold",
    description:
      "Eye-catching designs with bold colors and dynamic layouts for maximum impact.",
    projects: "180+",
    rating: "4.7",
  },
  {
    image: design80,
    title: "Eco-Friendly Concepts",
    description:
      "Sustainable designs using recycled materials and earth-friendly printing techniques.",
    projects: "95+",
    rating: "4.9",
  },
  {
    image: design81,
    title: "Luxury Finishes",
    description:
      "Premium designs featuring foil stamping, embossing, and specialty finishes.",
    projects: "120+",
    rating: "4.8",
  },
];


  return (
    <section id="designs" className="py-20 px-[5%] bg-white/55">
      <div className="section-header text-center mb-12">
        <h2 className="section-title text-5xl font-bold text-[#2b2101] opacity-0 animate-fadeInUp">
          Design Concepts
          <span className="block w-20 h-1 bg-red-600 mx-auto mt-2 rounded"></span>

        </h2>
        <p className="section-description text-lg text-gray max-w-2xl mx-auto mt-5 leading-relaxed">
          Explore our creative design concepts for various printing applications
        </p>
      </div>

      <div className="design-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {designs.map((design, index) => (
          <div key={index} className="design-card bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="design-image h-48 overflow-hidden">
              <img
                src={design.image}
                alt={design.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>

            <div className="design-content p-5">
              <h3 className="text-lg font-semibold mb-3 text-primary">{design.title}</h3>
              <p className="text-gray text-sm mb-4 leading-relaxed">{design.description}</p>

              <div className="design-stats flex justify-between border-t border-lightGray pt-4">
                <div className="design-stat text-center">
                  <h4 className="text-xl font-semibold text-primary">{design.projects}</h4>
                  <p className="text-xs text-gray">Projects</p>
                </div>
                <div className="design-stat text-center">
                  <h4 className="text-xl font-semibold text-primary">{design.rating}</h4>
                  <p className="text-xs text-gray">Rating</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Designs;