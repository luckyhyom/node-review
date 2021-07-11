// 현재 실행중인 노드 프로세스의 정보
const { nextTick } = require('process');
const process = require('process');

console.log(1);
console.log(1);
console.log(1);
console.log(1);
console.log(1);


// 0초후에 큐에 넣고, 모든 명령어 실행이 완료되면 실행됨.
setTimeout(() => {
    console.log('setTimeout');
}, 0);


// 콜스택 비워지면 무조건 내가 먼저 큐에 들어감.
process.nextTick(()=>{
    console.log('nextThick');
})