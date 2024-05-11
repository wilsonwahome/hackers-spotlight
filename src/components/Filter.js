import React, { useState } from 'react';

function Filters() {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
    // Implement filter logic here
    // For example, you can fetch filtered data based on the selected filter
  };

  return (
    <div className="filters">
      <h1>Filters</h1>
      <ul className="filter-options">
        <li className={selectedFilter === 'all' ? 'active' : ''} onClick={() => handleFilterChange('all')}>All</li>
        <li className={selectedFilter === 'top' ? 'active' : ''} onClick={() => handleFilterChange('top')}>Top</li>
        <li className={selectedFilter === 'new' ? 'active' : ''} onClick={() => handleFilterChange('new')}>New</li>
        <li className={selectedFilter === 'best' ? 'active' : ''} onClick={() => handleFilterChange('best')}>Best</li>
      </ul>
      {/* Render filtered content based on the selected filter */}
      <div className="filtered-content">
        {selectedFilter === 'all' && <p>Show all stories</p>}
        {selectedFilter === 'top' && <p>Show top stories</p>}
        {selectedFilter === 'new' && <p>Show new stories</p>}
        {selectedFilter === 'best' && <p>Show best stories</p>}
      </div>
    </div>
  );
}

export default Filters;
