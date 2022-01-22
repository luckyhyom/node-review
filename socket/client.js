// ES6 import or TypeScript
import { io } from "socket.io-client";

const socket = io('http://localhost:8080');
socket.on('test',message => {
    console.log(message);
});

socket.emit('toServer','i am a client');

