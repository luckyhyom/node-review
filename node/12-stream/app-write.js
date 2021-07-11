const fs = require('fs');

const writeStream = fs.createWriteStream('./file3.txt');
writeStream.on('finish',()=>{
    console.log('finished!');
});


writeStream.write('hello');
writeStream.write('world');
writeStream.end();


const http = require('http');
const server = http.createServer((req,res)=>{
    // 한번에 보내지 말고 잘라서 보내라
    const stream = fs.createWriteStream('./file.txt');
    stream.pipe(res);
});

server.listen(3000);