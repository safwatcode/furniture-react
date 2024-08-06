import React from "react";
import ProductList from "./components/ProductList";

function Link() {
  return (
    <div className="container">
      <h1>Hello Products</h1>
      <p>This is the Product page.</p>
      <ProductList />
    </div>
  );
}

export default Link;
