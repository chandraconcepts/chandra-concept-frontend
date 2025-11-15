// src/components/Pricing.tsx
import React from 'react';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: "Starter",
      price: "₹5,000+",
      period: "per project",
      features: [
        "Up to 500 units",
        "2 design revisions",
        "Standard materials",
        "Digital printing",
        "5 business days turnaround"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "₹15,000+",
      period: "per project",
      features: [
        "500-5,000 units",
        "5 design revisions",
        "Premium materials",
        "Offset or digital printing",
        "Specialty finishes available",
        "3 business days turnaround"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "volume pricing",
      features: [
        "5,000+ units",
        "Unlimited design revisions",
        "Premium & specialty materials",
        "Offset, digital, or specialty printing",
        "Advanced finishing options",
        "Priority turnaround",
        "Dedicated account manager"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 px-[5%] bg-gray-50">
      <div className="section-header text-center mb-12">
        <h2 className="section-title text-5xl font-bold text-[#2b2101] opacity-0 animate-fadeInUp">
          Competitive Pricing
          <span className="block w-20 h-1 bg-red-600 mx-auto mt-2 rounded"></span>

        </h2>
        <p className="section-description text-lg text-gray max-w-2xl mx-auto mt-5 leading-relaxed">
          Flexible pricing options for all your printing needs
        </p>
      </div>

      <div className="pricing-grid grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`pricing-card bg-white rounded-2xl overflow-hidden text-center shadow-md transition-all duration-300
        border-2 border-yellow-300      // gold border
        ${plan.popular ? 'scale-105 shadow-lg' : ''}
      `}
          >
            {/* HEADER */}
            <div className="pricing-header bg-primary text-white p-6">
              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
              <div className="price text-3xl font-bold mb-1">{plan.price}</div>
              <div className="period text-sm opacity-80">{plan.period}</div>
            </div>

            {/* FEATURES */}
            <div className="pricing-features p-4">
              <ul className="space-y-3 mb-4">
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="py-2 border-b border-gray last:border-b-0 text-gray-900"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* BUTTON */}
            <div className="pricing-cta px-6 pb-6">
              <button className="pricing-btn w-full bg-primary text-white py-2.5 px-6 rounded-full text-sm font-semibold cursor-pointer transition-all duration-300 hover:bg-red-800 hover:-translate-y-1">
                {plan.name === "Enterprise" ? "Contact Us" : "Get Started"}
              </button>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Pricing;