// 수정하면 안될 변수를 수정하려는 실수를 방지하기 위해 private member 사용

// 즉시실행 함수를 만들어 함수스코프를 생성
const obj = (() => {
  const _privateMember1 = Symbol('private1');
  const _privateMember2 = Symbol('private2');
  return {
    [_privateMember1]: '외부에서 보이긴 하는데 접근할 방법이 X',
    [_privateMember2]: 10,
    publicMember1: 20,
    publicMember2: 30,
  }
})();

// obj[Symbol('private1')] // 새로운 Symbol이 생기기때문에 안된다.
class OBJ {
  private1 = Symbol('p1');
  #private2 = 'p2';
  public1 = 'public';
}

console.log(new OBJ().public1); // 접근 가능
console.log(new OBJ().private1); // 눈으로 확인만 가능 (코드로 활용 x)
console.log(new OBJ().private2); // 접근 자체 불가능