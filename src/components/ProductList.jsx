import React from "react";
import useFetch from "../hooks/useFetch";
import "./ProductList.css";

const ProductList = () => {

  const { data, loading, error } = useFetch(
    "https://api.escuelajs.co/api/v1/products"
  );

  if (loading) {
    return <h2>Loading Products...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div className="main">

      <h1>Product List</h1>

      <div className="products">

        {data.slice(0, 10).map((item) => (

          <div className="card" key={item.id}>

            <img src={item.images[0]} alt={item.title} />

            <h3>{item.title}</h3>

            <p>Price : ₹ {item.price}</p>

          </div>

        ))}

      </div>

    </div>
  );
};

export default ProductList;
