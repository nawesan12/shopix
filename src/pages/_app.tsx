import Chat from "@/components/Chat";
import { CartProvider } from "@/context/CartContext";
import { UserProvider } from "@/context/UserContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <CartProvider>
        <Component {...pageProps} />
        <Chat />
      </CartProvider>
    </UserProvider>
  );
}
