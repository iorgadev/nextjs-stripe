import "../styles/globals.css";
import type { AppProps } from "next/app";

import { CartProvider } from "use-shopping-cart";
import getStripe from "../utils/get-stripejs";
import * as config from "../config";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider
      mode="checkout-session"
      stripe={getStripe()}
      currency={config.CURRENCY}
    >
      <Component {...pageProps} />
    </CartProvider>
  );
}
export default MyApp;
