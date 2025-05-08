import WebSocket, { WebSocketServer } from 'ws';

const port = 8080;
const wss = new WebSocketServer({ port });

console.log(`WebSocket server is running on ws://localhost:${port}`);

wss.on('connection', (ws) => {
    console.log('New client connected');

    ws.on('message', (message) => {
        console.log(`Received: ${message}`);
        // Echo the message back to the client
        ws.send(`Server: ${message}`);
    });

    ws.on('close', () => {
        console.log('Client disconnected');
    });

    ws.on('error', (error) => {
        console.error(`WebSocket error: ${error}`);
    });
});