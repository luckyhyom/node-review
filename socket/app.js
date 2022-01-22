import express from 'express';
import { Server } from 'socket.io';

const app = express();

app.get('/',(req,res,next) => {
    res.send('hi');
});

const server = app.listen(8080);

const socketIO = new Server(server,{
    cors: {
        origin: '*',
    },
});

socketIO.on('connection', (socket) => {
    console.log('conneted');
    socketIO.emit('test', 'i am a server');
    socketIO.on('toServer', (message) => {
        console.log(message);
    });    

    socket.on('toServer', (message) => {
        console.log(message);
    });
});