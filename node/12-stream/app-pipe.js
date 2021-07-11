const fs = require('fs');
const zlib = require('zlib');

const zip = zlib.createGzip();
const readStream = fs.createReadStream('./file.txt');
const writeStream = fs.createWriteStream('./file4.txt');

readStream.pipe(zip).pipe(writeStream);
