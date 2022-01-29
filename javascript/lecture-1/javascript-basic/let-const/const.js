/**
 * a는 객체를 바라본다.
 * b는 a를 바라보는 것이 아니라 a가 바라보는 것을 바라본다.
 */
let a = { a: 10 };
const b = a;
a = 20;
console.log(a);
console.log(b);

/**
 * 상수는 객체를 고정하여 바라보지만
 * 객체는 다른 데이터를 참조한다.
 * 따라서 상수가 다른 대상을 바라볼 수는 없지만
 * 바라보는 대상 (객체)의 내용은 변경 될 수 있다.
 */

const obj = { value: 10 };
obj.value = 20;
obj.option = true;

const arr = [1, 2, 3];
arr.push('new!');
delete arr[0];

console.log(obj, arr);