import { WebSocketServer } from "ws";
const config = (await import("./config.json", { with: { type: "json" } })).default;
const wss = new WebSocketServer({ port: config.port });
wss.on("connection", (ws) => {
    console.log("Client connected");
    ws.on("message", (message) => {
        console.log(`Received: ${message}`);
        ws.send(`received: ${message}`);
    });
    ws.on("close", () => {
        console.log("Client disconnected");
    });
});

console.log("WebSocket server is running on port 8080");
