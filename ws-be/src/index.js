"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
console.log('WebSocket server starting on port 8080...');
wss.on("connection", function (socket) {
    socket.send("Hello World");
    setInterval(() => {
        socket.send("Hello World, price of solana is " + Math.random() * 100);
    }, 500);
    socket.on("message", (e) => {
        console.log(e.toString());
    });
});
