// src/components/Contact.tsx
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-[5%] bg-white">
      <div className="section-header text-center mb-12">
          <h2 className="text-5xl font-bold text-[#2b2101] animate-fadeInUp">
          Get In Touch
                      <span className="block w-20 h-1 bg-red-600 mx-auto mt-2 rounded"></span>

        </h2>
        <p className="section-description text-lg text-gray max-w-2xl mx-auto mt-5 leading-relaxed">
          Have a project in mind? Contact us for a free consultation and quote
        </p>
      </div>

      <div className="contact-grid grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="contact-info bg-primary text-white p-10 rounded-2xl">
          <h3 className="text-2xl font-semibold mb-5 relative pb-4">Contact Information</h3>
          
          <div className="contact-detail flex mb-6">
            <div className="contact-icon w-12 h-12 bg-white bg-opacity-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <i className="fas fa-map-marker-alt text-gold text-lg"></i>
            </div>
            <div className="contact-text">
              <h4 className="text-lg font-semibold mb-1">Our Location</h4>
              <p>123 Printing Street, Chennai, Tamil Nadu 600001</p>
            </div>
          </div>

          <div className="contact-detail flex mb-6">
            <div className="contact-icon w-12 h-12 bg-white bg-opacity-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <i className="fas fa-phone-alt text-gold text-lg"></i>
            </div>
            <div className="contact-text">
              <h4 className="text-lg font-semibold mb-1">Phone Number</h4>
              <p>+91 98765 43210</p>
            </div>
          </div>

          <div className="contact-detail flex mb-6">
            <div className="contact-icon w-12 h-12 bg-white bg-opacity-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <i className="fas fa-envelope text-gold text-lg"></i>
            </div>
            <div className="contact-text">
              <h4 className="text-lg font-semibold mb-1">Email Address</h4>
              <p>
                <a 
                  href="mailto:info@chandraaconcepts.com"
                  className="text-white text-opacity-80 no-underline transition-colors duration-300 hover:text-gold"
                >
                  info@chandraaconcepts.com
                </a>
              </p>
            </div>
          </div>

          <div className="contact-detail flex mb-6">
            <div className="contact-icon w-12 h-12 bg-white bg-opacity-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <i className="fas fa-clock text-gold text-lg"></i>
            </div>
            <div className="contact-text">
              <h4 className="text-lg font-semibold mb-1">Working Hours</h4>
              <p>Monday - Saturday: 9:00 AM - 7:00 PM</p>
            </div>
          </div>

          <div className="social-links flex gap-4 mt-8">
            {['facebook-f', 'instagram', 'linkedin-in', 'whatsapp'].map((platform, index) => (
              <a 
                key={index}
                href="#" 
                className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:bg-gold hover:text-dark hover:-translate-y-1"
              >
                <i className={`fab fa-${platform}`}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          <form className="space-y-5">
            <div className="form-group">
              <input 
                type="text" 
                placeholder="Your Name" 
                required 
                className="w-full p-4 border border-gray-300 rounded-lg text-base transition-all duration-300 focus:border-primary focus:ring-3 focus:ring-primary focus:ring-opacity-10"
              />
            </div>
            
            <div className="form-group">
              <input 
                type="email" 
                placeholder="Your Email" 
                required 
                className="w-full p-4 border border-gray-300 rounded-lg text-base transition-all duration-300 focus:border-primary focus:ring-3 focus:ring-primary focus:ring-opacity-10"
              />
            </div>
            
            <div className="form-group">
              <input 
                type="tel" 
                placeholder="Your Phone" 
                className="w-full p-4 border border-gray-300 rounded-lg text-base transition-all duration-300 focus:border-primary focus:ring-3 focus:ring-primary focus:ring-opacity-10"
              />
            </div>
            
            <div className="form-group">
              <input 
                type="text" 
                placeholder="Subject" 
                className="w-full p-4 border border-gray-300 rounded-lg text-base transition-all duration-300 focus:border-primary focus:ring-3 focus:ring-primary focus:ring-opacity-10"
              />
            </div>
            
            <div className="form-group">
              <textarea 
                placeholder="Your Message" 
                required 
                rows={6}
                className="w-full p-4 border border-gray-300 rounded-lg text-base resize-vertical transition-all duration-300 focus:border-primary focus:ring-3 focus:ring-primary focus:ring-opacity-10"
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="submit-btn bg-primary text-white py-4 px-8 rounded-lg text-base font-semibold cursor-pointer transition-all duration-300 hover:bg-red-800 hover:-translate-y-1 flex items-center gap-3"
            >
              <i className="fas fa-paper-plane"></i>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;