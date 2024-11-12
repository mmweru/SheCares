import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaSearch } from 'react-icons/fa'; // Import the search icon
import './Podcast.css'; // Ensure this path is correct
import Navigation from './Navigation';

const Podcasts = () => {
  const [podcasts, setPodcasts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPodcasts, setFilteredPodcasts] = useState([]);

  const API_KEY = 'AIzaSyANJSUNb6RSOVSMuqDcD0BAFk8SuvjANtc'; // Your new API key
  const MAX_RESULTS = 12; // Number of podcasts to display

  // Function to fetch podcasts
  const fetchPodcasts = async (query) => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=${MAX_RESULTS}&q=${query}&key=${API_KEY}`
      );
      setPodcasts(response.data.items);
      setFilteredPodcasts(response.data.items);
    } catch (error) {
      console.error('Error fetching podcasts:', error);
    }
  };

  // Fetch initial podcasts
  useEffect(() => {
    fetchPodcasts('mental health women');
  }, []);

  // Function to handle search
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== '') { // Check if search term is not empty
      fetchPodcasts(searchTerm); // Fetch podcasts based on the search term
    } else {
      // Optionally, you can reset to the initial state
      setFilteredPodcasts(podcasts);
    }
  };

  return (
    <div className="podcasts-container">
      <Navigation />
      <h2 className='text-3xl mb-6 mt-16 font-semibold'>Podcasts on Mental Health</h2>

      <form onSubmit={handleSearch} className="search-form">
    <div className="search-input">
        <span className="search-icon">
            <FaSearch /> {/* Use the imported search icon */}
        </span>
        <input
            type="text"
            placeholder="Search podcasts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />
    </div>
    <button type="submit">Search</button>
</form>

      <div className="podcast-cards">
        {filteredPodcasts.map((podcast) => (
          <div className="podcast-card" key={podcast.id.videoId}>
            <img src={podcast.snippet.thumbnails.medium.url} alt={podcast.snippet.title} />
            <h3>{podcast.snippet.title}</h3>
            <p>{podcast.snippet.description}</p>
            <a href={`https://www.youtube.com/watch?v=${podcast.id.videoId}`} target="_blank" rel="noopener noreferrer">
              Listen Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Podcasts;
