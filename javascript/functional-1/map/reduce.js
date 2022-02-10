/**
 * reduce: 축약하다. -> 배열을 하나의 값으로 만든다.
 */

const add = (a, b) => a + b;
const arr = [1,2,3,4];
const sum = add(add(add(add(0,1),2),3),4);
console.log(sum);

const reduce = (f, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }
  for (const a of iter) {
    acc = f(acc, a);
  }
  return acc;
};

const sum2 = reduce((acc, a) => {
    return acc + a;
}, arr);

console.log(sum2);