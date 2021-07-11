const process = require('process');

console.log(1);
setTimeout(() => {
    console.log('setTimeout = 2');
}, 0);

console.log(2);
setImmediate(()=>{
    console.log('immediate = 3');
})

console.log(3);
process.nextTick(()=>{
    console.log('netxg = 1');
})

console.time();
for (let i = 0; i < 300; i++) {
    const element = i;
    
}
console.timeEnd();