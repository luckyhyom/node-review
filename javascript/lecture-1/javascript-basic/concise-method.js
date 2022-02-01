/**
 * es6에서 생긴 객체안의 concised 메소드는 생성자 함수 prototype이 없다.
 * 원래는 함수여도 생성자 함수가 있어 new 연산자를 통해 인스턴스를 생성할 수 있었지만
 * 새로운 축약형 메소드는 생성자 함수를 없애므로써 제한시켰다.
 * 원래의 목적에 맞는 용도로만 사용하게 되었고, 함수가 prototype이라는 객체가 없어져 가벼워졌다. (성능 향상)
 */
const obj = {
  name: 'obj no.1',
  log(v) {
    console.log(v);
  }
}
const oldObj = {
  name: 'obj no.1',
  log: function (v) {
    console.log(v);
  }
}

obj.log('hi!');
