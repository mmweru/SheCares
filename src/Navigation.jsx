import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Navigation.css';

const Navigation = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const goToServices = () => {
    navigate('/services'); // Navigate to the Services page
  };

  const goToCommunity= () => {
    navigate('/community'); // Navigate to the Community page
  };
  const goToElla= () => {
    navigate('/ella'); // Navigate to the Community page
  };

  return (
    <div className="navigation">
      <div className="nav-item" onClick={goToServices}>Services</div>
      <div className="nav-item"  onClick={goToElla}>Dr. Ella</div>
      <div className="nav-item" onClick={goToCommunity}>Community</div>
      <div className="nav-item">About</div>
    </div>
  );
};

export default Navigation;
