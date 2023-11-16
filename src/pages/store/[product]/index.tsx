import { Product } from "@/types/components.types";
import Image from "next/image";

export default function UniqueProductPage({ product }: { product: Product }) {
  return (
    <>
      <Image src={product.image} alt="" width={100} height={100} />
      {product.title} {product.price}
      <section className="flex"></section>
    </>
  );
}

export async function getServerSideProps(context: any) {
  const res = await fetch("https://fakestoreapi.com/products");
  const datos = await res.json();

  const productoABuscar = context.params.product;

  const product = datos.find(
    (producto: any) => producto.title === productoABuscar
  );

  return {
    props: {
      product,
    },
  };
}
