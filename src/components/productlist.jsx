import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Importez Link

function ProductList() {
  // État local pour gérer la liste de produits
  const [products, setProducts] = useState([]);

  // Fonction pour charger la liste de produits
  const fetchProducts = () => {
    fetch('http://localhost:5000/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Erreur lors du chargement des produits :', error));
  };

  // Fonction pour supprimer un produit par son ID
  const deleteProduct = (id) => {
    fetch(`http://localhost:5000/products/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        // Rafraîchir la liste des produits après la suppression
        fetchProducts();
      })
      .catch((error) => console.error('Erreur lors de la suppression du produit :', error));
  };

  // Charger la liste des produits au chargement initial du composant
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
                <img
                  src={`https://via.placeholder.com/150?text=${product.name}`}
                  className="card-img-top"
                  alt={product.name}
                />
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
                  <Link className="btn btn-warning" to={`/showOneProduct/${product.id}`}>Details</Link> {/* Utilisez Link pour naviguer vers la route de modification */}
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


