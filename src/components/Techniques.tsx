// src/components/Techniques.tsx
import React from 'react';
import rect42 from "../assets/media/Rectangle 42.png";
import rect43 from "../assets/media/Rectangle 43.png";
import rect44 from "../assets/media/Rectangle 44.png";

const Techniques: React.FC = () => {
  const techniques = [
    {
      image: rect42,
      title: "Offset Printing",
      description:
        "High-quality, cost-effective printing for large quantities. Ideal for brochures, catalogs, and magazines.",
      specs: [
        { label: "Best For", value: "High-volume jobs" },
        { label: "Color Accuracy", value: "Excellent" },
        { label: "Turnaround", value: "3-5 days" }
      ]
    },
    {
      image: rect43,
      title: "Digital Printing",
      description:
        "Fast, flexible printing for short runs. Perfect for personalized materials and quick turnarounds.",
      specs: [
        { label: "Best For", value: "Short runs, variable data" },
        { label: "Color Accuracy", value: "Very Good" },
        { label: "Turnaround", value: "1-3 days" }
      ]
    },
    {
      image: rect44,
      title: "Screen Printing",
      description:
        "Vibrant, durable printing on fabrics and other surfaces. Ideal for apparel and promotional items.",
      specs: [
        { label: "Best For", value: "Apparel, textiles" },
        { label: "Color Vibrancy", value: "Excellent" },
        { label: "Durability", value: "High" }
      ]
    }
  ];

  return (
    <section id="techniques" className="py-20 px-[5%] bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="section-header text-center mb-12">
        <h2 className="section-title text-5xl font-bold text-[#2b2101] opacity-0 animate-fadeInUp">
          Advanced Printing Techniques
          <span className="block w-20 h-1 bg-red-600 mx-auto mt-2 rounded"></span>

        </h2>
        <p className="section-description text-lg text-gray max-w-2xl mx-auto mt-5 leading-relaxed">
          Explore our specialized printing methods for exceptional results
        </p>
      </div>

      <div className="techniques-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {techniques.map((technique, index) => (
          <div key={index} className="technique-card bg-white">
            <div className="technique-image h-48 overflow-hidden">
              <img
                src={technique.image}
                alt={technique.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>

            <div className="technique-content p-6">
              <h3 className="text-2xl font-bold mb-4 text-primary">{technique.title}</h3>
              <p className="text-gray mb-4 leading-relaxed">{technique.description}</p>

              <div className="material-specs flex flex-wrap gap-4">
                {technique.specs.map((spec, specIndex) => (
                  <div
                    key={specIndex}
                    className="spec-item flex-1 min-w-32 text-center p-3 bg-lightGray rounded-lg"
                  >
                    <h4 className="text-2xs text-gray mb-1 font-bold">{spec.label}</h4>
                    <p className="font-semibold text-grey text-l">{spec.value}</p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Techniques;