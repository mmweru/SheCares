import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './Services.css'; // Create a new CSS file for services
import micIcon from '../src/assets/images/mic.png'; // Adjust the path accordingly
import bookIcon from '../src/assets/images/book.png'; // Adjust the path accordingly
import communityIcon from '../src/assets/images/community.png'; // Adjust the path accordingly


const servicesData = [
  {
    title: 'Books',
    description: 'Offers books which educate women on the importance of mental health',
    icon: bookIcon,
    link: '/books', 
  },
  {
    title: 'Support',
    description: 'Providing support through community and resources.',
    icon: communityIcon,
    link: null, // No navigation for this card
  },
  {
    title: 'Podcasts',
    description: 'Offering various podcasts which enlighten women on mental health awareness',
    icon: micIcon,
    link: '/podcasts', // Link to the podcasts page
  },
];

const wordsCarousel1 = [
  'BossLady', 'GirlPower', 'SisterHood', 'Fearless', 'Leader', 'Trailblazer', 'Innovator', 'RoleModel', 'PuffGirl', 'GirlEmpowerment', 'SisterTalks'
];

const wordsCarousel2 = [
  '#She is powerful', '#She is smart', '#She cares', '#She is intelligent', '#She is inspiring', '#She is brave', '#She is resilient', '#She is kind', '#She is Creative', '#She is Her', '#She is Innovative'
];

const Services = () => {
  return (
    <div className="services-container" id="services">
    <h2 className="services-title" style={{ textAlign: 'center', margin: '20px 0' }}>Our Services</h2>

      <div className="services-cards">
        {servicesData.map((service, index) => (
          service.link ? (
            <Link to={service.link} key={index} className="service-card-link">
              <div className="service-card">
                <img src={service.icon} alt={`${service.title} icon`} className="service-icon" />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </Link>
          ) : (
            <div className="service-card" key={index}>
              <img src={service.icon} alt={`${service.title} icon`} className="service-icon" />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          )
        ))}
      </div>

      {/* Add space between cards and carousels */}
      <div className="carousel-spacing"></div>

      {/* First Carousel */}
      <div className="carousel-container">
        <div className="carousel carousel-left">
          {wordsCarousel1.map((word, index) => (
            <div className="carousel-item" key={index}>{word}</div>
          ))}
        </div>
      </div>

      {/* Second Carousel */}
      <div className="carousel-container">
        <div className="carousel carousel-right">
          {wordsCarousel2.map((word, index) => (
            <div className="carousel-item" key={index}>{word}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
