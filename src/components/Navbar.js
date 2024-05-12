import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar'; // Import the SearchBar component
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/search">Search</Link></li>
      </ul>
      <SearchBar onSearch={() => {}} /> {/* Render the SearchBar component */}
    </nav>
  );
}

export default Navbar;
