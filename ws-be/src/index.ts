import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({ 
    port: 8081,
    perMessageDeflate: false
});

console.log('WebSocket server starting on port 8081...');

wss.on("connection", function(socket) {
    socket.send("Hello World");
    
    socket.on("message", (e) => {
        if ( e.toString() === "ping") {
            socket.send("pong");
        }
    });
});

