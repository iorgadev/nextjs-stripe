import React, { useEffect } from "react";

import products from "../data/products.json";
import Product from "./Product";

function Products() {
  return (
    <section className="products">
      {products.map((product) => (
        <Product key={product.sku} {...product} />
      ))}
    </section>
  );
}

export default Products;
