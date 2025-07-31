import WebSocket, { WebSocketServer } from 'ws';
import jwt, { JwtHeader, JwtPayload } from 'jsonwebtoken';
import { JWT_SECRET } from '@repo/backend-common/config';

const port = 8000;
const wss = new WebSocketServer({ port });

console.log(`WebSocket server is running on ws://localhost:${port}`);

wss.on('connection', function connection(ws,request) {
    console.log('New client connected');
    const url = request.url;
    if(!url) {
        return;
    }

    const queryParams = new URLSearchParams(url.split('?')[1]);
    const token = queryParams.get('token') ||"" ;
    const decoded = jwt.verify(token, JWT_SECRET);
    if (!decoded || !(decoded as JwtPayload).userid) {
        ws.close();
        return;
    }
    ws.on('message', function message(data) {
        ws.send("pong");
    });
   
});