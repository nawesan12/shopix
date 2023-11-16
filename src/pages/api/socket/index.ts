import type { NextApiRequest, NextApiResponse } from "next";
import { Server } from "socket.io";

export default function ManejadorDeSockets(
  req: NextApiRequest,
  res: NextApiResponse
) {
  //@ts-ignore
  if (res.socket?.server.io) {
    console.log("Conexion ya configurada!");
    res.end();
    return;
  }

  //@ts-ignore
  const io = new Server(res.socket?.server);
  //@ts-ignore
  res.socket.server.io = io;

  io.on("connection", (socket) => {
    console.log(`Usuario conectado en el socket: ${socket.id}`);

    socket.on("chat:mensaje", (mensaje) => {
      io.emit("chat:mensaje", mensaje);
    });
  });

  console.log("Configurando socket!");
  res.end();
}
