import React from 'react';

const SearchInput = ({ value, onChange, placeholder }) => {
  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoFocus
      />
    </div>
  );
};

export default SearchInput;