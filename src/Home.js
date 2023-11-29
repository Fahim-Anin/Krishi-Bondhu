// Home.js

import React from 'react';
import { Link } from 'react-router-dom';
import gloves from './image1/gloves.jpg';
import harvestor from './image1/harvestor1.jpeg';
import insecttraops from './image1/insecttraps.jpg';
import ploow from './image1/ploow.jpg';
import seeds from './image1/seeds.jpg';
import seed1 from './image1/seeds1.jpg'
import sprayer from './image1/sprayer1.jpg';
import tructor from './image1/tructor1.jpg';
import wheelbarrows from './image1/wheelbarrows1.jpg'
import one from './image1/1.jpg'
import two from './image1/2.jpg'
import three from './image1/3.jpg'
import four from './image1/4.jpg'
const Home = () => {
  // Sample data for images
  const imagesData = [
    {
      src: tructor,
      name: 'Tructor',
      
      value: '$100',
    },
    {
      src: gloves,
      name: 'Gloves',
     
      value: '$50',
    },
    {
      src: harvestor,
      name: 'Harvestor',
      
      value: '$120',
    },
    {
      src: insecttraops,
      name: 'Insect Traps',
     
      value: '$320',
    },
    {
      src: ploow,
      name: 'Plow',
     
      value: '$4',
    },
    {
      src: seeds,
      name: 'Seed Machine',
    
      value: '$100',
    },
    {
      src: seed1,
      name: 'Seeds',
     
      value: '$100',
    },
    {
      src: sprayer,
      name: 'Sprayer',
     
      value: '$100',
    },
    {
      src: wheelbarrows,
      name: 'Wheel Barrows',
     
      value: '$100',
    },
    {
      src: one,
      name: 'tools1',
     
      value: '$100',
    },
    {
      src: two,
      name: 'tools2',
     
      value: '$100',
    },
    {
      src: three,
      name: 'tools3',
     
      value: '$100',
    },
    {
      src: four,
      name: 'Wheel Barrows',
     
      value: '$100',
    },
    // Add more image data as needed
  ];

 // Home.js

 return (
  <div>
    <div style={homeContainer}>
      <div style={leftContent}>
        {/* Left content goes here */}
        <Link to="/accessories" style={optionStyle}>
          Farm Machinery
        </Link>
        <Link to="/men" style={optionStyle}>
          Farm Tools
        </Link>
        <Link to="/women" style={optionStyle}>
          Livestock Equipment
        </Link>
        <Link to="/electronics" style={optionStyle}>
          Crop Protection
        </Link>
        <Link to="/electronics" style={optionStyle}>
          Seeds and Fertilizers
        </Link>
        <Link to="/women" style={optionStyle}>
          Farm Clothing and Accessories
        </Link>
        <Link to="/electronics" style={optionStyle}>
          Electronics for Farming
        </Link>
        <Link to="/electronics" style={optionStyle}>
          Farmers' Accessories
        </Link>
        {/* Add more left content as needed */}
      </div>
      <div style={rightContent}>
        {/* Right content goes here */}
        <div style={imageLine}>
          {imagesData.map((image, index) => (
            <div key={index} style={imageBox}>
              <img src={image.src} alt={image.name} style={imageStyle} />
              <div style={imageDescription}>
                <div>{image.name}</div>
                <div>{image.category}</div>
                <div>{image.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);
};

// Styles
// Styles
// Styles
const homeContainer = {
  display: 'flex',
  flexDirection: 'column',
  padding: '20px',
};

const header = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '20px',
};

const headerLink = {
  textDecoration: 'none',
  color: '#333',
  fontSize: '18px',
};

const findHub = {
  marginLeft: '20px',
  fontSize: '16px',
};

const burgerMenu = {
  marginRight: '20px',
  fontSize: '16px',
};

const contentContainer = {
  display: 'flex',
};

const leftContent = {
  display: 'flex',
  flexDirection: 'row', // Change to 'row'
  flexWrap: 'wrap', // Allow items to wrap to the next line
  justifyContent: 'space-around',
  marginBottom: '20px',
};

const rightContent = {
  flex: '1',
  marginLeft: '10px', // Add some spacing between left and right content
};


const optionStyle = {
  textDecoration: 'none',
  color: '#333',
  border: '1px solid #ccc',
  padding: '10px',
  borderRadius: '5px',
  marginBottom: '10px',
  display: 'inline-block', // Change to 'inline-block'
};





const imageLine = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  alignItems: 'flex-start', // Add this line
};


const imageBox = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '10px',
  width: '200px', // Set the width of the image box
  textAlign: 'center',
};


const imageStyle = {
  width: '150px', // Change to your desired width
  height: '150px', // Change to your desired height
  objectFit: 'cover',
  marginBottom: '5px',
};


const imageDescription = {
  textAlign: 'center',
}
export default Home;
