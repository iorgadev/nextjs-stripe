import React, { useEffect } from "react";

import { useShoppingCart } from "use-shopping-cart";
import Cart from "../components/Cart";
import CartSummary from "../components/CartSummary";

function BuildTest() {
  const { cartDetails, cartCount } = useShoppingCart();

  useEffect(() => {
    console.log(cartDetails);
  }, [cartDetails]);

  return (
    <div>
      <Cart>
        <CartSummary />
        {/* <DebugCart /> */}
      </Cart>
    </div>
  );
}

export default BuildTest;
