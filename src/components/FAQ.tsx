// src/components/FAQ.tsx
import React, { useState } from 'react';

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What file formats do you accept for printing?",
      answer: "We accept PDF, JPEG, PNG, TIFF, and EPS formats. For best results, we recommend using PDF with CMYK color mode and 300 DPI resolution. Please ensure all fonts are embedded or outlined in your files."
    },
    {
      question: "How long does a typical printing job take?",
      answer: "Standard turnaround time is 3-5 business days after approval. Rush services are available for 24-48 hour turnaround for an additional fee. Large or complex projects may require additional time, which we'll discuss during the quoting process."
    },
    {
      question: "What paper types and finishes do you offer?",
      answer: "We offer a wide variety of paper stocks including matte, gloss, silk, recycled, and textured options. Finishes include UV coating, spot UV, foil stamping, embossing, and die-cutting. We'll help you select the perfect combination for your project."
    },
    {
      question: "Do you offer design services?",
      answer: "Yes, we have an in-house design team that can create or modify your print materials. Our designers specialize in creating print-ready files that ensure the highest quality output. Design services are billed separately from printing costs."
    },
    {
      question: "Can I request a sample before placing a bulk order?",
      answer: "Yes! We provide sample prints upon request to ensure the quality and design meet your expectations before committing to a larger order."
    },
    {
      question: "Do you offer eco-friendly printing options?",
      answer: "Absolutely! We offer eco-friendly paper, soy-based inks, and sustainable printing methods to minimize environmental impact."
    },
    {
      question: "What are your payment options?",
      answer: "We accept credit/debit cards, PayPal, bank transfers, and corporate invoicing for business clients. Contact us if you need special payment arrangements."
    },
    {
      question: "Do you provide international shipping?",
      answer: "Yes, we ship worldwide! Shipping costs and delivery times depend on your location and the size of the order."
    },
    {
      question: "What should I do if my printed materials have defects?",
      answer: "If your order has any defects or printing errors, please contact us within 7 days of delivery with details and photos. We will review the issue and offer reprints or refunds as needed."
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-[5%] bg-white">
      <div className="section-header text-center mb-12">
          <h2 className="text-5xl font-bold text-[#2b2101] animate-fadeInUp">
          Frequently Asked Questions
                      <span className="block w-20 h-1 bg-red-600 mx-auto mt-2 rounded"></span>

        </h2>
        <p className="section-description text-lg text-gray max-w-2xl mx-auto mt-5 leading-relaxed">
          Find answers to common questions about our printing services
        </p>
      </div>

      <div className="faq-container max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className={`faq-item border-b border-gray-200 last:border-b-0 ${
              activeIndex === index ? 'active' : ''
            }`}
          >
            <div 
              className="faq-question p-5 font-semibold cursor-pointer flex justify-between items-center transition-colors duration-300 hover:bg-gray-50 text-lg text-dark"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <i className={`fas fa-chevron-down transition-transform duration-300 ${
                activeIndex === index ? 'rotate-180' : ''
              }`}></i>
            </div>
            
            <div className={`faq-answer px-5 overflow-hidden transition-all duration-300 ${
              activeIndex === index ? 'max-h-96 py-5' : 'max-h-0 py-0'
            }`}>
              <p className="text-gray leading-7">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;