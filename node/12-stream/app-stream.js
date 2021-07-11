const fs = require('fs');

const readStream = fs.createReadStream('./file.txt',{
    highWaterMark: 8, // 64 kbytes
    encoding: 'utf-8',
});

let data = [];

readStream.on('data', chunk => {
    console.log(chunk);
    data.push(chunk);
});

// 조금씩 읽어서 모은 데이터를 합해서 완성시킴.
// 사실 조금씩 다시 써도 됨
readStream.on('end',()=>{
    console.log(data.join(''));
})

readStream.on('error', error=>{
    console.log(error);
});

