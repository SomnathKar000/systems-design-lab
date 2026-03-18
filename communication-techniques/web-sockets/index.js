import express from "express";
import path from "path";
import { createServer } from "node:http";
import { WebSocketServer } from "ws";

const app = express();
const server = createServer(app);
const wss = new WebSocketServer({ noServer: true });

const PORT = process.env.PORT || 4000;

app.use(express.static(path.join(import.meta.dirname, "public")));

server.on("upgrade", (req, socket, head) => {
    wss.handleUpgrade(req, socket, head, (ws) => {
        wss.emit("connection", ws, req);
    });
});

wss.on('connection', (ws, req) => {
    console.log('client connected')

    ws.on('message', (message) => {
        const data= message.toString()
        console.log('Server received an message: ', data)
        ws.send(`Server received: ${data}`)
    })

    ws.on('close', () => {
        console.log('Client disconnected')
    })

    ws.send("Welcome to the WebSocket server")
})

app.get("/health", (_, res) => {
    res.json({
        success: true,
        message: "Health is ok",
    });
});

server.listen(PORT, () => {
    console.log("Server is listening on port: ", PORT);
});
