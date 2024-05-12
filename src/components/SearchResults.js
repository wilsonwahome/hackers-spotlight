import React from 'react';
import { useLocation } from 'react-router-dom';

function SearchResults() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const keyword = searchParams.get('keyword');

  return (
    <div>
      <h1>Search Results for "{keyword}"</h1>
      <p>No results found.</p>
    </div>
  );
}

export default SearchResults;
