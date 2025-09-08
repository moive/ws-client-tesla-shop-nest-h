import { Manager, Socket } from "socket.io-client";

export const connectToServer = () => {
  const url = "http://localhost:3000/socket.io/socket.io.js";
  const manager = new Manager(url);

  const socket = manager.socket("/");
  addListeners(socket);
};

const addListeners = (socket: Socket) => {
  const serverStatusLabel = document.querySelector("#server-status")!;

  socket.on("connect", () => {
    console.log("connected");
  });

  socket.on("disconnect", () => {
    console.log("disconnected");
  });
};
