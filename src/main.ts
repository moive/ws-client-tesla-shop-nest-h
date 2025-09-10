import { connectToServer } from "./socket-client";
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>Websocket - Client</h1>
    <span id="server-status">offlilne</span>
    <ul id="clients-ul"></ul>
    <form id="message-form">
      <input placeholder="message" type="text" id="message-input" />
    <form/>

    <h3>Messages</h3>
    <ul id="messages-ul"></ul>
  </div>
`;
connectToServer();
// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
