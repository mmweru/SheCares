import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Books.css'; // Ensure this path is correct

const GOOGLE_BOOKS_API_KEY = 'AIzaSyBRXufDWGcwv9_3Su5zoSUzaP9bgA_0PRU';

const BookCard = ({ title, authors, cover, previewLink }) => (
  <div className="book-card">
    <img
      src={cover || 'https://via.placeholder.com/128x180?text=No+Cover'}
      alt={`${title} cover`}
    />
    <div className="book-details">
      <h3 className="font-bold text-lg text-pink-500">{title}</h3>
      <p className="text-gray-300 mb-2">By: {authors}</p>
      {previewLink ? (
        <a
          href={previewLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition"
        >
          Read Me
        </a>
      ) : (
        <p className="text-gray-500">Preview not available</p>
      )}
    </div>
  </div>
);

const BooksPage = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('mental health in women');

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${GOOGLE_BOOKS_API_KEY}&maxResults=12`
        );
        setBooks(response.data.items || []);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };
    fetchBooks();
  }, [searchTerm]);

  const handleSearch = (e) => {
    e.preventDefault();
    const inputValue = e.target.search.value.trim();
    if (inputValue) {
      setSearchTerm(inputValue);
    }
  };

  return (
    <div className="container">
      <h1>See How Lionesses Coped with Their Battles</h1>
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          name="search"
          placeholder="Search for a book..."
          className="search-input"
        />
        <button type="submit">Search</button>
      </form>
      <div className="book-card-container">
        {books.map((book) => {
          const volumeInfo = book.volumeInfo;
          return (
            <BookCard
              key={book.id}
              title={volumeInfo.title}
              authors={volumeInfo.authors ? volumeInfo.authors.join(', ') : 'Unknown'}
              cover={volumeInfo.imageLinks ? volumeInfo.imageLinks.thumbnail : null}
              previewLink={volumeInfo.previewLink}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BooksPage;
