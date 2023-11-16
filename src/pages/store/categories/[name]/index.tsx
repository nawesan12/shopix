import { Product } from "@/types/components.types";
import Image from "next/image";
import Link from "next/link";

export default function UniqueCategoryPage({
  products,
}: {
  products: Product[];
}) {
  return (
    <>
      {products.length > 0 ? (
        products.map((product: Product) => <>{product.title}</>)
      ) : (
        <>
          <h2>Esta categoria no existe!</h2>
          <Link href="/store">Volver</Link>
        </>
      )}
    </>
  );
}

export async function getServerSideProps(context: any) {
  const { name } = context.params;
  const res = await fetch(`https://fakestoreapi.com/products/category/${name}`);
  const products = await res.json();

  return {
    props: {
      products,
    },
  };
}
