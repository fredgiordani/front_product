import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Importez Link

function ProductList() {
  const [products, setProducts] = useState([]);

  const fetchProducts = () => {
    fetch('http://localhost:5000/products') // Remplacez cette URL par l'endpoint de votre API NestJS pour récupérer la liste de produits
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Erreur lors du chargement des produits :', error));
  };

  const deleteProduct = (id) => {
    fetch(`http://localhost:5000/products/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        fetchProducts(); // Rafraîchir la liste après suppression
      })
      .catch((error) => console.error('Erreur lors de la suppression du produit :', error));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="row">
      <div className="col-md-6">
        <h2>Liste de produits</h2>
        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-md-4 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.price} €</p>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text">{product.color}</p>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteProduct(product.id)}
                  >
                    Supprimer
                  </button>
                  <Link className="btn btn-warning" to={`/showOneProduct/${product.id}`}>Details</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
