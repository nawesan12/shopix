import { useContext } from "react";
import { CartContext } from "@/context/CartContext";
import { Product } from "@/types/components.types";

export default function StorePage({ products }: { products: Product[] }) {
  //@ts-ignore
  const { cart, setCart } = useContext(CartContext);

  return (
    <section>
      <button onClick={() => console.log(cart)}>Mostrar carrito</button>

      <ul className="grid px-8 gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product: Product) => (
          <li key={product.id}>
            <a href="#" className="block overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt=""
                className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
              />

              <div className="relative pt-3 bg-white">
                <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                  {product.title}
                </h3>

                <p className="mt-2">
                  <span className="sr-only"> Regular Price </span>

                  <span className="tracking-wider text-gray-900">
                    {" "}
                    ${product.price} USD{" "}
                  </span>
                </p>
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
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();

  return {
    props: {
      products,
    },
  };
}
