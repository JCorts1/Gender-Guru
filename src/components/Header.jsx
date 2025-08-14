import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <h1>Gender Guru</h1>
      <p>Master German Grammar & Pronouns</p>
      
      <div className="flags-container">
        <span 
          className="flag"
          role="img" 
          aria-label="German flag"
          style={{ fontSize: '24px' }}
        >
          🇩🇪
        </span>
        <span 
          className="flag"
          role="img" 
          aria-label="Austrian flag"
          style={{ fontSize: '24px' }}
        >
          🇦🇹
        </span>
      </div>
    </header>
  );
};

export default Header;