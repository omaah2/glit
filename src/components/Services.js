import React from 'react';
import './style.css';

function Services() {
  const servicesData = [
      {
          title: 'Web Development',
          description: 'Custom web development solutions to meet your unique business needs.',
          icon: 'web-development.png',
      },
      {
          title: 'Mobile App Development',
          description: 'iOS and Android app development for your mobile business solutions.',
          icon: 'mobile-development.png',
      },
  ];

  return (
    <section className="services" id="services">
      <h2>Our Services</h2>
      <div className="service-list">
        {servicesData.map((service, index) => (
          <div className="service" key={index}>
            <img src={service.icon} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
