import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [keyword, setKeyword] = useState('');

  const handleSearch = () => {
    if (keyword.trim() !== '') {
      onSearch(keyword.trim());
      setKeyword('');
    }
  };

  return (
    <div className="SearchBar">
      <input
        type="text"
        placeholder="Search..."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
