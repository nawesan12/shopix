import CategoryOptions from "@/components/CategoryOptions";
import MainMenu from "@/components/MainMenu";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tienda Shopix | Encontra lo que buscas</title>
      </Head>

      <MainMenu />
      <h2 className="font-semibold m-4 text-xl">
        {"What's"} the right <br /> deal for you?
      </h2>

      <CategoryOptions />
    </>
  );
}
