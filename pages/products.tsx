import React from "react";
import { DebugCart } from "use-shopping-cart";
import Cart from "../components/Cart";
import CartSummary from "../components/CartSummary";
import Products from "../components/Products";

function ProductsPage() {
  return (
    <>
      <Cart>
        <Products />
        <CartSummary />
        <DebugCart />
      </Cart>
    </>
  );
}

export default ProductsPage;
