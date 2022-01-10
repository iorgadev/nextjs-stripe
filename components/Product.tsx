import React, { useEffect, useState } from "react";
import Image from "next/image";

import { useShoppingCart, formatCurrencyString } from "use-shopping-cart";

interface Product {
  name: string;
  description?: string;
  sku: string;
  price: number;
  image: string;
  attribution: string;
  currency: string;
}

function Product(product: Product) {
  const [inCart, setInCart] = useState(false);
  const { addItem, removeItem, incrementItem, decrementItem, cartDetails } =
    useShoppingCart();

  useEffect(() => {
    if (cartDetails[product.sku]) {
      setInCart(true);
    } else {
      setInCart(false);
    }
  }, [cartDetails, product.sku]);

  return (
    <div key={product.sku} className="product">
      <Image
        src={product.image}
        alt={product.name}
        layout="intrinsic"
        width={300}
        height={200}
      />
      <h2>{product.name}</h2>
      <p className="price">
        {formatCurrencyString({
          value: product.price,
          currency: product.currency,
        })}
      </p>

      {/* show add to cart button OR +/- buttons */}
      {!inCart ? (
        <button
          className="cart-style-background"
          onClick={() => addItem(product)}
        >
          Add to cart
        </button>
      ) : null}

      <button
        className="cart-style-background"
        onClick={() => incrementItem(product.sku)}
      >
        +
      </button>
      <button
        className="cart-style-background"
        onClick={() => decrementItem(product.sku)}
      >
        -
      </button>
      <button
        className="cart-style-background"
        onClick={() => removeItem(product.sku)}
      >
        Remove
      </button>
    </div>
  );
}

export default Product;
