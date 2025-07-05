import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({ 
    port: 8081,
    perMessageDeflate: false
});

console.log('WebSocket server starting on port 8081...');

wss.on("connection", function(socket) {
    socket.send("Hello World");
    setInterval(() => {
        socket.send("Hello World, price of solana is " + Math.random() * 100);
    }, 500);

    socket.on("message", (e) => {
        if ( e.toString() === "ping") {
            socket.send("pong");
        }
    });
});

