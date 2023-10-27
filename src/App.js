import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';
import React, { useState } from 'react';

import Navbar from './components/navbar';
import ProductList from './components/productlist';
import AddProduct from './components/addProduct';
import HelloWorld from './components/helloWorld';


function App() {
 
  return (
    <Router>
      <div>
        <Navbar />
        <ProductList />
        <Routes>
        <Route path="/hello-world" element={<HelloWorld />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;






