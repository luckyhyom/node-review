// Primitive Value
// Reference Value
// 주소에 값을 직접 할당하느냐, 다른 주소를 참조하느냐의 차이

/**
 * 유일무이한 값, 형변환 x
 * private 멤버에대한 needs
 * 열거대상에서 제외된다. (for문 같은 것)
 */

const a = Symbol('a');
const b = Symbol('a');
a === b // fals

const NAME = Symbol('이름'); // 상수는 대문자
const iu = {
  [NAME]: '아이유', // 1. private, 2. 변수가 있어야 symbol 값을 찾을 수 있음
  age: 32
}

console.log(iu);
Object.getOwnPropertySymbols(iu);
Reflect.ownKeys(iu);