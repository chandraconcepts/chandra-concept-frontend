// src/components/Process.tsx
import React from 'react';

const Process: React.FC = () => {
  const steps = [
    {
      icon: 'fas fa-lightbulb',
      title: 'Consultation & Concept Design',
      description: 'Understanding requirements and creating unique designs.',
      features: [
        'Client discussion on stationery, branding & mass printing needs',
        'Custom design development for business cards, letterheads, etc.',
        'Mockups for t-shirts, mugs, ID cards, and promotional items'
      ]
    },
    {
      icon: 'fas fa-clipboard-list',
      title: 'Material Selection & Approval',
      description: 'Choosing the right paper, fabric, and printing materials.',
      features: [
        'High-quality paper for business stationery & letterheads',
        'Premium fabric selection for apparel printing',
        'Durable ID card & badge production materials',
        'Client approval on mockups before final production'
      ]
    },
    {
      icon: 'fas fa-print',
      title: 'Advanced Printing & Production',
      description: 'Using industry-leading technology for precise results.',
      features: [
        'Digital, offset & screen printing for different materials',
        'High-quality UV printing for mugs, pens, & promotional goods',
        'Eco-friendly ink and sustainable print solutions'
      ]
    },
    {
      icon: 'fas fa-check-circle',
      title: 'Quality Assurance & Packaging',
      description: 'Ensuring perfection in every product before delivery.',
      features: [
        'Final inspection for print alignment & color accuracy',
        'Secure packaging for office stationery & custom items',
        'Labeling and branding for bulk orders'
      ]
    },
    {
      icon: 'fas fa-truck',
      title: 'Delivery & Client Satisfaction',
      description: 'On-time delivery with complete customer satisfaction.',
      features: [
        'Fast & reliable shipping for bulk orders',
        'Customer feedback collection for future improvements',
        'Ongoing support for reorders & additional branding needs'
      ]
    }
  ];

  return (
    <section id="process" className="py-20 px-[5%] bg-gray-50">
      <div className="section-header text-center mb-12">
        <h2 className="section-title text-5xl font-bold text-[#2b2101] opacity-0 animate-fadeInUp">
          Our Printing & Design Process
          <span className="block w-20 h-1 bg-red-600 mx-auto mt-2 rounded"></span>
        </h2>
        <p className="section-description text-lg text-gray max-w-2xl mx-auto mt-5 leading-relaxed">
          Streamlined steps for high-quality, customized printing solutions.
        </p>
      </div>

      <div className="timeline relative max-w-6xl mx-auto">
        <div className="timeline-line absolute left-1/2 transform -translate-x-1/2 w-1 bg-primary top-0 bottom-0 rounded hidden md:block"></div>

        {steps.map((step, index) => (
          <div
            key={index}
            className={`group process-step flex mb-10 w-full md:w-[calc(50%-40px)]
              relative bg-white bg-opacity-85 backdrop-blur-sm rounded-2xl p-6
              shadow-lg transition-all duration-300 hover:-translate-y-1 
              ${index % 2 === 0 ? 'md:ml-auto' : ''}`}
          >
            {/* ICON + BLINKING RING */}
            <div className="step-icon group relative min-w-20 h-20 
             bg-yellow-400 text-dark text-2xl rounded-full 
              flex items-center justify-center mr-5">

              {/* ICON */}
              <i className={`${step.icon} transition-all duration-300 group-hover:text-white`}></i>

              {/* Infinite Blinking Ring */}
              <div
                className="absolute w-full h-full rounded-full border-2
                  border-yellow-500 animate-blink-ring"
              ></div>

            </div>


            {/* CONTENT */}
            <div className="step-content flex-1">
              <h3 className="text-xl font-semibold mb-3 text-dark">{step.title}</h3>
              <p className="text-gray mb-4">{step.description}</p>

              <ul className="step-features list-none pl-5">
                {step.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="relative mb-2 text-gray 
                    before:content-['✓'] before:absolute before:left-[-20px] before:text-primary"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;
