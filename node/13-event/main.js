const logger = require('./logger.js');
const emitter = new logger.Logger();

// log라는 이벤트는, 그냥 log를 실행하는 이벤트야.
emitter.on('log',(args)=>{
    console.log(args);
});

function test(){
    console.log('test function!');
}

//  test()가 아닌, test로 넣어준다.
emitter.log(test);

