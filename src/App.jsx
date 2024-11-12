import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Splash from './Splash'; // Import the Splash component
import Navigation from './Navigation'; // Import the Navigation component
import './App.css';
import Podcasts from './Podcast'; // Import the Podcasts component
import Books from './Books'; // Import the Podcasts component
import Services from './Services'; // Import the Podcasts component
import Ella from './Ella'; // Import the Podcasts component

import Home from './Home';
import Community from './Community';


function App() {
  return (
    <Router>
      <div>
        <Navigation /> {/* Add the Navigation component here */}
        <Routes>
          {/* Define the route for the splash screen */}
          <Route path="/" element={<Splash />} />
          <Route path="/podcasts" element={<Podcasts />} /> {/* Add Podcasts route */}
          <Route path="/books" element={<Books />} /> {/* Add Podcasts route */}
          <Route path="/services" element={<Services />} />
          <Route path="/community" element={<Community />} />
          <Route path="/ella" element={<Ella />} />


          {/* Other routes can be added here as needed */}
          {/* <Route path="/home" element={<Home />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;