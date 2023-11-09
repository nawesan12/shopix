import { useContext } from "react";
import { CartContext } from "@/context/CartContext";
import { Product } from "@/types/components.types";

export default function StorePage({ products }: { products: Product[] }) {
  //@ts-ignore
  const { cart, setCart } = useContext(CartContext);

  return (
    <>
      <button onClick={() => console.log(cart)}>Mostrar carrito</button>

      <ul className="flex flex-col gap-10">
        {products.map((product: Product) => (
          <li key={product.id}>
            {product.title}
            {product.price}

            <button
              className="bg-black text-white"
              onClick={() => {
                setCart({
                  products: [...cart.products, product],
                  totalPrice: cart.totalPrice + product.price,
                });
              }}
            >
              Agregar al carrito
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export async function getServerSideProps(context: any) {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();

  return {
    props: {
      products,
    },
  };
}
