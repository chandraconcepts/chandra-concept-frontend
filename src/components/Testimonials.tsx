// src/components/Testimonials.tsx
import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "Rajesh Kumar",
      position: "CEO, Tech Innovations Ltd.",
      text: "Chandraa Concepts transformed our corporate identity with their premium stationery and ID cards. The attention to detail and quality of materials exceeded our expectations. We've received countless compliments on our new business cards."
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      name: "Priya Sharma",
      position: "Marketing Director, Retail Solutions",
      text: "The promotional products we ordered were exceptional! The print quality was vibrant and durable, and the team was incredibly helpful throughout the design process. Our customers loved the branded merchandise."
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-[5%] bg-gradient-to-br from-dark to-gray-800 text-white relative overflow-hidden">
      <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-radial-gradient(circle, rgba(255,215,0,0.1) 0%, transparent 70%) animate-rotate-20 z-0"></div>
      
      <div className="section-header text-center mb-12 relative z-10">
        <h2 className="section-title text-4xl text-white mb-4 relative inline-block">
          What Our Clients Say
        </h2>
        <p className="section-description text-lg text-gray-300 max-w-2xl mx-auto mt-5 leading-relaxed">
          Don't just take our word for it - hear from our satisfied customers
        </p>
      </div>

      <div className="testimonials-container relative z-10">
        <div className="testimonials-slider max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="testimonial bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-10 text-center border border-gold border-opacity-20 mx-5"
            >
              <div className="client-info flex items-center justify-center mb-5">
                <div className="client-avatar w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-gold">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="client-details text-left">
                  <h4 className="text-lg font-semibold mb-1">{testimonial.name}</h4>
                  <p className="text-gold text-sm">{testimonial.position}</p>
                </div>
              </div>
              
              <div className="testimonial-text italic leading-8 relative">
                {testimonial.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;