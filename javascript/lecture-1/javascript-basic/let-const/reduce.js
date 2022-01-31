/**
 * 두번째 인자가 추가되면 길이만큼 반복된다.
 * 인자에 첫번째 원소부터 대입시켜야 하기 때문이다.
 * 인자가 없다면 자동으로 누적값에 첫번째 원소가 할당되어 length - 1 만큼 순회한다.
 */
const a = ['a','b','c'];
const OBJ = a.reduce((obj, item) => {
  obj[item] = item;
  return obj;
}, {});
console.log(OBJ);