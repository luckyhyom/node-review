/**
 * 구조 분해 할당
 * 1. 인덱스 선택 가능
 * 2. default parameter 가능
 * 3. 순서 바꾸기 가능
 * 4. 변수명 할당 간단하게!
 */
const arr = [1,2,3,4];
const [, , , a, b = a*a] = arr;
console.log(a,b);

let first = 2;
let second = 1;
[second, first, third] = [first, second, 3]
console.log(first, second, third);

/**
 * 1. 변수명 할당 간단하게
 * 2. 객체 검색 비용을 줄인다. (url을 3번 찾아서 각 변수에 값을 할당함 -> 한번만 참조해서 값을 할당함)
 */
const getUrlParts = (url) => /^(https?):\/\/(\w{3,}\.[A-z.]{2,})(\/[a-z0-9]{1,}\/([a-z0-9\-.,]+))$/.exec(url);
const [ , protocol, host, , title] = getUrlParts('http://abc.com/es6/7-1.destructuring');

// const url = getUrlParts('http://abc.com/es6/7-1.destructuring');
// protocol = url[1];
// host = url[2];
// title = url[4];

// 어떠한 객체의 값을 여러번 써야한다면 변수로 선언하여 쓰는 것이 이득이다.
const obj = {
  value: 10
}
// 한번 찾는다.
const value = obj.value;
const result = value * 20 + value / 20
// 두번 찾는다.
// obj.value * 20 + obj.value / 20

/**
 * spread operator와 함께..
 * 1. shift, unshift 사용하지 않을 수 있으므로 성능 향상
 */

// arr.shift();
const [, ...rest] = arr;
// arr.unshift(1);
const copy = [1, ...arr];