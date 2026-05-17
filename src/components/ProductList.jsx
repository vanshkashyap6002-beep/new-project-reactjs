import React from "react";
import useFetch from "../hooks/useFetch";
import "./ProductList.css";

const ProductList = () => {
  const {
    data: products,
    loading,
    error,
  } = useFetch("https://api.escuelajs.co/api/v1/products");

  if (loading) {
    return <h2 className="status">Loading...</h2>;
  }

  if (error) {
    return <h2 className="status error">{error}</h2>;
  }

  return (
    <div className="container">
      <h1 className="title">Product Store</h1>

      <div className="product-grid">
        {products.slice(0, 12).map((product) => (
          <div className="card" key={product.id}>
            <img
              src={product.images[0]}
              alt={product.title}
              className="product-image"
            />

            <div className="card-body">
              <h3>{product.title}</h3>

              <p className="price">₹ {product.price}</p>

              <p className="description">
                {product.description.slice(0, 70)}...
              </p>

              <button className="btn">View Product</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;