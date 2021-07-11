const fs = require('fs').promises;

//read a file .. 버퍼 형태로 읽어들임, 설정 필요.
fs.readFile('./text.txt','utf8')
.then(console.log)
.catch(console.log);

// writing a file
fs.writeFile('./text.txt','hello!').catch(console.log);