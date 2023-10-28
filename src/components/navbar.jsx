import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [showAddProduct, setShowAddProduct] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* <a className="nav-link active" aria-current="page" href="http://localhost:3000"> */}
              <Link to="/product-list">Lister produit</Link>
                
              {/* </a> */}
            </li>
          </ul>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <Link to="/addProductForm">ajouter produit</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

