import React from 'react';
import { Link } from 'react-router-dom'; // If you need navigation links
import './InvoicePage.css'
import tructor from './image1/tructor1.jpg'
import googlelogo from './image1/GOOGLE1.png'
import fblogo from './image1/fblogo.png'
import { useState } from 'react';



const InvoicePage = () => {
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });

  const [productData, setProductData] = useState({
    productName: '',
    quantity: 0,
    price: 0,
    totalPrice: 0,
  });

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleProductChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleContinueShipment = () => {
    // Implement logic for continuing shipment
    console.log('Continue Shipment clicked');
  };

  const handleLogin = () => {
    // Implement logic for login
    console.log('Login clicked');
  };

  const handleSignUp = () => {
    // Implement logic for sign up
    console.log('Sign Up clicked');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
      <div style={{ margin: '20px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
        <h2>Log in or Sign Up</h2>
        {/* Login Card */}
        <div style={{ marginBottom: '20px' }}>
          <h3></h3>
          <label>Username:</label>
          <input type="text" name="username" value={loginData.username} onChange={handleLoginChange} />
          <br />
          <label>Password:</label>
          <input type="password" name="password" value={loginData.password} onChange={handleLoginChange} />
          <br />
          <button onClick={handleLogin}>Log In</button>
          <button onClick={handleSignUp} style={{ marginLeft: '10px' }}>
            Sign Up
          </button>
        </div>
      </div>

      <div style={{ margin: '20px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
        {/* Product Purchase Card */}
        <h3>Product Purchase</h3>
        <div style={{ textAlign: 'left' }}>
          <p>
            <strong>Name:</strong> {productData.productName}
          </p>
          <p>
            <strong>Quantity:</strong> {productData.quantity}pcs
          </p>
          <p>
            <strong>Price:</strong> {productData.price}$
          </p>
          <p>
            <strong>Total Price:</strong> {productData.totalPrice}$
          </p>
        </div>
        <button onClick={handleContinueShipment}>Continue Shipment</button>
      </div>
    </div>
  );
};

export default InvoicePage;