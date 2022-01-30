const obj = {
  a: 10
};
Object.freeze(obj);

obj.a = 20;
console.log(obj);

const a = {
  a: 1,
  b: [1, 2, 3]
}

/**
 * 얕은 복사
 * 같은 배열을 참조한다. property가 가지고있는 주소값만 복사해온다.
 */
const b = a;
const c = Object.assign(a);
const d = { ...a }

a.a = 123;
console.log(a.a === b.a);
console.log(a.a,b.a);