import { useState, useEffect, FormEvent } from "react";
import io from "socket.io-client";
import type { Socket } from "socket.io-client";

type Mensaje = {
  contenido: string;
};

let socket: Socket;

export default function Chat() {
  const [message, setMessage] = useState("");
  const [todosLosMensajes, setTodosLosMensajes] = useState([]);
  const [chatEstaAbierto, setChatEstaAbierto] = useState(false);

  useEffect(() => {
    iniciarSockets();

    return () => {
      socket.disconnect();
    };
  }, []);

  async function iniciarSockets() {
    await fetch("/api/socket");

    socket = io();

    socket.on("chat:mensaje", (mensajeNuevo) => {
      //@ts-ignore
      setTodosLosMensajes((mensajesAnteriores) => [
        ...mensajesAnteriores,
        mensajeNuevo,
      ]);
    });
  }

  function manejarEnvioDeMensaje(evento: FormEvent) {
    evento.preventDefault();

    console.log("Mensaje enviado!");

    socket.emit("chat:mensaje", { contenido: message });

    setMessage("");
  }

  return (
    <>
      <button
        className="bg-black p-2 rounded-full fixed bottom-4 right-4"
        onClick={() => setChatEstaAbierto(!chatEstaAbierto)}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#FFF"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M8 9h8" />
          <path d="M8 13h3.5" />
          <path d="M10.5 19.5l-1.5 -1.5h-3a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v4" />
          <path d="M18 22l3.35 -3.284a2.143 2.143 0 0 0 .005 -3.071a2.242 2.242 0 0 0 -3.129 -.006l-.224 .22l-.223 -.22a2.242 2.242 0 0 0 -3.128 -.006a2.143 2.143 0 0 0 -.006 3.071l3.355 3.296z" />
        </svg>
      </button>

      {chatEstaAbierto ? (
        <section className="border border-black fixed bottom-20 right-4">
          <h2>Chat</h2>
          <section>
            <ul className="LISTA-DE-MENSAJES">
              {todosLosMensajes.map((mensaje: Mensaje, indice: number) => (
                <li key={indice}>Cliente: {mensaje.contenido}</li>
              ))}
            </ul>
            <form onSubmit={manejarEnvioDeMensaje} action="">
              <input
                type="text"
                placeholder="Mensaje"
                onChange={(evento) => setMessage(evento.target.value)}
                value={message}
              />
              <input type="submit" value="=>" />
            </form>
          </section>
        </section>
      ) : null}
    </>
  );
}
