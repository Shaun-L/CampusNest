// SearchBar.js
import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    if (value.trim() !== '') {
      setFilteredData(data.filter(item => item.toLowerCase().includes(value)));
    } else {
      setFilteredData([]);
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search ..."
      />
      {searchTerm && (
        <div className="results">
          {filteredData.map((item, index) => (
            <div key={index} className="result-item">
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
