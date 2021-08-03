import React from 'react';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import Products from './components/Products/Products.js';


import './App.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Products></Products>
      <Footer></Footer>
    </div>
  );
}

export default App;
