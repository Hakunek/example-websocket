import WebSocket from "ws";
const config = (await import("./config.json", { with: { type: "json" } })).default;
const ws = new WebSocket(`${config.serverAddress}:${config.port}`);
ws.on("open", () => {
    console.log("Connected to the server");
    console.log(`Sending: "Hello, WebSocket server!"`);
    ws.send("Hello, WebSocket server!");
});
ws.on("message", (message) => {
    console.log(`server: ${message}`);
});
ws.on("close", () => {
    console.log("Disconnected from the server");
});
ws.on("error", (error) => {
    console.error(`WebSocket error: ${error}`);
});
