// src/components/ServiceMap.tsx
import React from 'react';
import southindia from '../assets/media/southindia.svg'
const ServiceMap: React.FC = () => {
  const cities = {
    tamilNadu: [
      { name: 'Chennai', icon: 'fas fa-building' },
      { name: 'Thiruchi', icon: 'fas fa-industry' },
      { name: 'Madurai', icon: 'fas fa-print' },
      { name: 'Salem', icon: 'fas fa-city' },
      { name: 'Coimbatore', icon: 'fas fa-business-time' }
    ],
    andhraPradesh: [
      { name: 'Hyderabad', icon: 'fas fa-globe' },
      { name: 'Vijayawada', icon: 'fas fa-map-marker-alt' }
    ],
    karnataka: [
      { name: 'Belgaum', icon: 'fas fa-warehouse' },
      { name: 'Hubli', icon: 'fas fa-truck' },
      { name: 'Shimoga', icon: 'fas fa-tree' },
      { name: 'Bangalore', icon: 'fas fa-landmark' },
      { name: 'Mangalore', icon: 'fas fa-water' },
      { name: 'Mysore', icon: 'fas fa-university' }
    ],
    kerala: [
      { name: 'Calicut', icon: 'fas fa-shopping-bag' },
      { name: 'Cochin', icon: 'fas fa-ship' },
      { name: 'Trivandrum', icon: 'fas fa-road' }
    ]
  };

  return (
    <section id="service-map" className="py-20 px-[5%] bg-white">
      <div className="section-header text-center mb-12">
        <h2 className="section-title text-5xl font-bold text-[#2b2101] opacity-0 animate-fadeInUp">
          Our Services In South India
                    <span className="block w-20 h-1 bg-red-600 mx-auto mt-2 rounded"></span>

        </h2>
        <p className="section-description text-lg text-gray max-w-2xl mx-auto mt-5 leading-relaxed">
          Our Services Available Throughout South India
        </p>
      </div>

      <div className="map-layout grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        {/* South India Map */}
        <div className="map-box w-full max-w-md p-5 border-2 border-gray rounded-lg bg-lightGray mx-auto lg:col-span-1">
          <img src={southindia} alt="South India Service Map" className="w-full h-auto" />
        </div>

        {/* City Groups */}
        <div className="city-groups grid grid-cols-1 md:grid-cols-2 gap-6 lg:col-span-2">
          <div className="city-box tamil-nadu bg-white p-6 rounded-lg shadow-lg border-l-4 border-pink-500">
            <h3 className="text-xl font-bold mb-4 text-dark">Tamil Nadu</h3>
            <ul className="space-y-3">
              {cities.tamilNadu.map((city, index) => (
                <li key={index} className="flex items-center gap-3 text-gray font-semibold">
                  <i className={`${city.icon} text-pink-500`}></i>
                  {city.name}
                </li>
              ))}
            </ul>
          </div>

          <div className="city-box andhra-pradesh bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
            <h3 className="text-xl font-bold mb-4 text-dark">Andhra Pradesh & Telangana</h3>
            <ul className="space-y-3">
              {cities.andhraPradesh.map((city, index) => (
                <li key={index} className="flex items-center gap-3 text-gray  font-semibold">
                  <i className={`${city.icon} text-orange-500`}></i>
                  {city.name}
                </li>
              ))}
            </ul>
          </div>

          <div className="city-box karnataka bg-white p-6 rounded-lg shadow-lg border-l-4 border-teal-500">
            <h3 className="text-xl font-bold mb-4 text-dark">Karnataka</h3>
            <ul className="space-y-3">
              {cities.karnataka.map((city, index) => (
                <li key={index} className="flex items-center gap-3 text-gray font-semibold">
                  <i className={`${city.icon} text-teal-500`}></i>
                  {city.name}
                </li>
              ))}
            </ul>
          </div>

          <div className="city-box kerala bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
            <h3 className="text-xl font-bold mb-4 text-dark">Kerala</h3>
            <ul className="space-y-3">
              {cities.kerala.map((city, index) => (
                <li key={index} className="flex items-center gap-3 text-gray font-semibold">
                  <i className={`${city.icon} text-green-500`}></i>
                  {city.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceMap;