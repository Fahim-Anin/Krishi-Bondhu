// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import FindHub from './FindHub';
import './App.css'; // You might have other styles or remove this line if not needed
import InvoicePage from './InvoicePage';
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/find-hub" element={<FindHub />} />
          <Route path="/invoice" element={<InvoicePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
