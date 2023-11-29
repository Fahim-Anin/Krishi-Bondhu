// FindHub.js

import React from 'react';
import location1 from './image1/location3.jpg'

const FindHub = () => {
  return (
    <div>
    <h2>See your nearby Hub</h2>
      <img
        src= {location1}
        alt="Find"
        style={{ height:'500px',width: '500px', maxWidth: '500px', margin: '20px 0' }}
      />
      {/* Add more content for the Find Hub page as needed */}
    </div>
  );
};

export default FindHub;
