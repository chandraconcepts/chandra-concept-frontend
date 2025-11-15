// src/components/About.tsx
import React from 'react';
import { Helmet } from 'react-helmet-async';

const About: React.FC = () => {
  const stats = [
    { icon: 'fas fa-users', number: '500+', text: 'Happy Clients' },
    { icon: 'fas fa-project-diagram', number: '2500+', text: 'Projects Completed' },
    { icon: 'fas fa-map-marker-alt', number: '8+', text: 'States Covered' }
  ];

  return (
    <section id="about" className="py-20 px-[5%] min-h-screen">
       <Helmet>
        <title>About Chandraa Concepts – Printing & Branding Experts</title>

        <meta
          name="description"
          content="Learn about Chandraa Concepts, a trusted printing and branding company in South India delivering premium quality printing, design, packaging, and branding solutions since 2010."
        />

        <meta
          name="keywords"
          content="about chandraa concepts, printing company india, branding services south india, premium printing, design studio"
        />

        <link rel="canonical" href="https://www.chandraaconcepts.com/about" />

        {/* Open Graph */}
        <meta property="og:title" content="About Chandraa Concepts – Your Trusted Printing Partner" />
        <meta property="og:description" content="We are a leading printing, branding, and design company offering high-quality solutions for businesses since 2010." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80" />
        <meta property="og:url" content="https://www.chandraaconcepts.com/about" />
        <meta property="og:type" content="article" />

        {/* Twitter */}
        <meta name="twitter:title" content="About Chandraa Concepts – Printing & Branding" />
        <meta name="twitter:description" content="Chandraa Concepts delivers premium printing and branding solutions backed by 14+ years of experience." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <div className="section-header text-center mb-12">
        <h2 className="section-title text-5xl font-bold text-[#2b2101] opacity-0 animate-fadeInUp">
          About Chandraa Concepts
          <span className="block w-20 h-1 bg-red-600 mx-auto mt-2 rounded"></span>
        </h2>

        <p className="section-description text-lg text-gray max-w-2xl mx-auto mt-5 leading-relaxed">
          We are a team of passionate designers and printing experts dedicated
          to helping businesses stand out
        </p>
      </div>


      <div className="about-grid grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="about-image rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Our Printing Studio"
            className="w-full h-auto block transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="about-content">
          <h3 className="text-3xl mb-5 text-dark font-semibold">Your Trusted Printing Partner</h3>
          <p className="mb-5 leading-8 text-gray">
            Founded in 2010, Chandraa Concepts has grown to become a leading
            provider of premium printing services in South India. Our mission is
            to deliver exceptional quality and innovative solutions that help
            businesses make a lasting impression.
          </p>
          <p className="mb-5 leading-8 text-gray">
            With state-of-the-art equipment and a team of experienced
            professionals, we combine traditional craftsmanship with modern
            technology to produce outstanding results for every project.
          </p>

          <div className="stats-grid grid grid-cols-1 sm:grid-cols-3 gap-5 mt-8">
            {stats.map((stat, index) => (
              <div key={index} className="stat-box text-center p-5 bg-white rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <i className={`${stat.icon} text-3xl text-gold mb-4`}></i>
                <h4 className="text-3xl text-primary font-bold">{stat.number}</h4>
                <p className="text-gray text-sm mt-2">{stat.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;