// 운영체제마다 구분자가 다르므로 path모듈을 이용해야한다.
const path = require('path');

console.log(__dirname);
console.log(__filename);

//경로 구분자
console.log(path.sep);
//환경변수 구분자
console.log(path.delimiter);

// basename이란? 파일명.
console.log(path.basename(__filename));
console.log(path.basename(__filename,'.js'));
// 저장경로
console.log(path.dirname(__filename));
// 확장자명
console.log(path.extname(__filename));
// parse
console.log(path.parse(__filename));
const test = path.parse(__filename)
// 나눠진 path를 문자열로..
console.log(path.format(test));

// isAbsolute
console.log('isAbsolute?',path.isAbsolute(__dirname));
console.log('isAbsolute?',path.isAbsolute('../'));

// 알아서 잘못된 것을 수정해줌
console.log(path.normalize('one/////two'));

// join
console.log(__dirname + path.sep + 'image');;
console.log(path.join(__dirname),'image');