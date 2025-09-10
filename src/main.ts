import { connectToServer } from "./socket-client";
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h2>Websocket - Client</h2>
    <div class="input-group mb-3">
      <input type="text" id="jwt-token" class="form-control" placeholder="Enter token">
      <button id="btn-connect" class="btn btn-outline-secondary">Connect</button>
    </div>
    <span id="server-status">offlilne</span>
    <ul class="list-group list-group-numbered mb-5" id="clients-ul"></ul>
    <form id="message-form">
      <input placeholder="message" class="form-control my-4" type="text" id="message-input" />
    <form/>

    <h3>Messages</h3>
    <ul id="messages-ul"></ul>
  </div>
 `;
// connectToServer();
// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

const jwtToken = document.querySelector<HTMLInputElement>("#jwt-token")!;
const btnConnect = document.querySelector<HTMLButtonElement>("#btn-connect")!;

btnConnect.addEventListener("click", () => {
  if (jwtToken.value.trim().length <= 0) return alert("Enter a valid JWT");
  connectToServer(jwtToken.value.trim());
});
