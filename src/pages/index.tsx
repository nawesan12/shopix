import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import { useRef, useContext } from "react";
import { UserContext } from "@/context/UserContext";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const nombreRef = useRef(null);
  //@ts-ignore
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <Head>
        <title>Tienda Shopix | Encontra lo que buscas</title>
      </Head>

      <main>Hola</main>

      <input type="text" ref={nombreRef} placeholder="pone tu nombre" />
      <button
        onClick={() => {
          //@ts-ignore
          setUser({ ...user, token: nombreRef.current?.value });
        }}
      >
        Ejecutar
      </button>

      <button onClick={() => console.log(user)}>Mostrar usuario</button>

      {user.token ? (
        <section>
          <h1>Componente del chat</h1>
        </section>
      ) : (
        <p>Debes iniciar sesion para ver el chat de soporte!</p>
      )}
    </>
  );
}
