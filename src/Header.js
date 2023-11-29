// Header.js

import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from './imaged/search1.png'; // Adjust the path based on your project structure

const Header = () => {
  return (
    <header style={headerStyle}>
      <div style={containerStyle}>
        <Link to="/" style={brandStyle}>
          Krishok Bondhu
        </Link>
        <div style={searchBoxStyle}>
          <div style={searchTextContainer}>
            <span>Search your needs</span>
          </div>
          <div style={logoContainer}>
            <img src={logoImage} alt="Logo" style={logoStyle} />
          </div>
        </div>
        <div style={rightLinksStyle}>
          <Link to="/find-hub" style={linkStyle}>
            Find Hub
          </Link>
          <div style={burgerMenuStyle}>☰</div>
        </div>
      </div>
    </header>
  );
};

// Styles
const headerStyle = {
  background: '#ffffff',
  padding: '10px', // Adjust the overall padding of the header
  borderBottom: '1px solid #e0e0e0',
};

const containerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginLeft: '10PX',
  marginRight: '60px'
};

const brandStyle = {
  textDecoration: 'none',
  color: '#333',
  fontSize: '1.5rem',
  padding: '10px', // Adjust the padding around "Krishok Bondhu"
};

const searchBoxStyle = {
  display: 'flex',
  alignItems: 'center',
  border: '1px solid #ccc',
  borderRadius: '20px',
  padding: '4px',
  marginLeft: '20px',
};

const searchTextContainer = {
  flex: 1,
  padding: '10px',
};

const logoContainer = {
  padding: '4px',
};

const logoStyle = {
  width: '30px',
  height: '30px',
  objectFit: 'cover',
};

const rightLinksStyle = {
  display: 'flex',
  alignItems: 'center',
};

const linkStyle = {
  textDecoration: 'none',
  color: '#333',
  marginLeft: '20px',
};

const burgerMenuStyle = {
  cursor: 'pointer',
  fontSize: '1.5rem',
  marginLeft: '0.5px',
  padding: '10px', // Adjust the padding around the burger menu
};

export default Header;
