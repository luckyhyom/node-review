// 고정된 사이즈의 메모리 덩어리
// 숫자의 배열.. 데이터의 바이트 자체

const buf = Buffer.from('Hi');
// 'Hi'를 어떻게 메모리에 저장하는가?
console.log(buf); // unicode) 'H':48 'i':69
console.log(buf.length);
console.log(buf[0]); // 배열에 있는 것을 접근하면 askii code
console.log(buf[1]);
// buffer를 한글로
console.log(buf.toString());

// create buffer size = 2
const buf2 = Buffer.alloc(2); // 두개가 들어갈수있다. [72,105]
const buf3 = Buffer.allocUnsafe(2); // fast 초기화하지 않음

buf2[0] = 72;
buf2[1] = 105;
console.log(buf2,'buf2!');

buf2.copy(buf3);

const concat = Buffer.concat([buf,buf2,buf3]);
console.log(concat.toString());
