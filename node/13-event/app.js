const EventEmitter = require('events');

const emitter = new EventEmitter();

// 이벤트 생성하기.


const callback1 = (args)=>{
    console.log('first callback - ',args);
};

emitter.on('hyom',callback1);

emitter.on('hyom',(args)=>{
    console.log('second callback - ',args);
})

emitter.emit('hyom',{message:1});
emitter.removeListener('hyom',callback1);
emitter.emit('hyom',{message:2});
emitter.emit('hyom',{message:3});
