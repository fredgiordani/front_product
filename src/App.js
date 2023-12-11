import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React from 'react';

import Navbar from './components/navbar';
import ProductList from './components/productlist';
import AddProductForm from './components/addProductForm';
import ShowOneProduct from './components/showOneProduct';

function App() {
 
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
        <Route path="/product-list" element={<ProductList />} />
        <Route path="/addProductForm" element={<AddProductForm />} />
        <Route path="/addProductForm" element={<AddProductForm />} />
        <Route path="/showOneProduct/:id" element={<ShowOneProduct />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;






