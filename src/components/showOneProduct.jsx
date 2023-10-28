import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ShowOneProduct() {
  const [product, setProduct] = useState({});
  const { id } = useParams(); // Récupérer l'ID de l'URL

  useEffect(() => {
    // Charger les informations du produit en fonction de l'ID
    fetch(`http://localhost:5000/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error(`Erreur lors du chargement du produit ${id} :`, error));
  }, [id]);

  return (
    <div className="container">
      <h2>Détails du produit</h2>
      <div className="card" style={{ maxWidth: '18rem' }}> {/* Définir la largeur maximale */}
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
        </div>
      </div>
    </div>
  );
}

export default ShowOneProduct;
