import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function SearchBar() {
  const [keyword, setKeyword] = useState('');
  const history = useHistory();

  const handleSearch = () => {
    if (keyword.trim() !== '') {
      // Redirect to search page with keyword as query parameter
      history.push(`/search?q=${keyword}`);
    }
    setKeyword('');
  };

  return (
    <div>
      <input type="text" value={keyword} onChange={e => setKeyword(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
