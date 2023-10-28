import React, { useState } from 'react';

function AddProductForm() {
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: 0,
    description: '',
    color: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: value,
    });
  };

  const handleAddProduct = () => {
    // Envoie la requête POST avec newProduct vers http://localhost:5000/products
    fetch('http://localhost:5000/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProduct),
    })
      .then((response) => response.json())
      .then((data) => {
        // Réinitialise le formulaire après l'ajout
        setNewProduct({
          name: '',
          price: 0,
          description: '',
          color: '',
        });
      })
      .catch((error) => console.error('Erreur lors de l\'ajout du produit :', error));
  };

  return (
    <div className="container mt-4">
      <h2>Ajouter un produit</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Nom du produit
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={newProduct.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Prix du produit
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="price"
            value={newProduct.price}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description du produit
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            value={newProduct.description}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="color" className="form-label">
            Couleur du produit
          </label>
          <input
            type="text"
            className="form-control"
            id="color"
            name="color"
            value={newProduct.color}
            onChange={handleInputChange}
            required
          />
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleAddProduct}
        >
          Valider
        </button>
      </form>
    </div>
  );
}

export default AddProductForm;
