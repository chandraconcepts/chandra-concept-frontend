// src/components/Contact.tsx
import React from 'react';
import { Helmet } from 'react-helmet-async';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;
    const subject = (form.elements.namedItem("subject") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    const mailto = `mailto:chandraconcepts@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `Name: ${name}
Email: ${email}
Phone: ${phone}

Message:
${message}`
    )}`;

    window.location.href = mailto;
  };

  return (
    <section id="contact" className="py-20 px-[5%] bg-white">
      <Helmet>
        <title>Contact Chandraa Concepts – Printing & Branding Services</title>

        <meta
          name="description"
          content="Get in touch with Chandraa Concepts for premium printing, branding, and design services. Contact us for project inquiries, quotes, and consultation."
        />

        <meta
          name="keywords"
          content="contact chandraa concepts, printing services contact, branding company chennai, printing quote, print consultation"
        />

        <link rel="canonical" href="https://www.chandraaconcepts.com/contact" />

        {/* Open Graph */}
        <meta property="og:title" content="Contact Chandraa Concepts – Let's Build Your Brand" />
        <meta property="og:description" content="Reach out to Chandraa Concepts for high-quality printing, branding, and design solutions." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80" />
        <meta property="og:url" content="https://www.chandraaconcepts.com/contact" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:title" content="Contact Chandraa Concepts – Printing & Branding Experts" />
        <meta name="twitter:description" content="Have a project? Contact Chandraa Concepts for premium printing and branding services." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

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
              <p>1st Street, Sivananda Colony, Tatabad, Coimbatore, Tamil Nadu 641012</p>
            </div>
          </div>

          <div className="contact-detail flex mb-6">
            <div className="contact-icon w-12 h-12 bg-white bg-opacity-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <i className="fas fa-phone-alt text-gold text-lg"></i>
            </div>
            <div className="contact-text">
              <h4 className="text-lg font-semibold mb-1">Phone Number</h4>
              <p>+91 9586 02027</p>
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
                  href="mailto:chandraconcepts@gmail.com"
                  className="text-white text-opacity-80 no-underline transition-colors duration-300 hover:text-gold"
                >
                  chandraconcepts@gmail.com
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
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full p-4 border border-gray-300 rounded-lg"
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full p-4 border border-gray-300 rounded-lg"
              />
            </div>

            <div className="form-group">
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone"
                className="w-full p-4 border border-gray-300 rounded-lg"
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full p-4 border border-gray-300 rounded-lg"
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                required
                rows={6}
                className="w-full p-4 border border-gray-300 rounded-lg"
              ></textarea>
            </div>

            <button
              type="submit"
              className="submit-btn bg-primary text-white py-4 px-8 rounded-lg flex items-center gap-3"
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