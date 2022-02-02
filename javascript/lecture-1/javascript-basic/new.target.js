/**
 * ES5의 new 연산자 사용 강제 방식
 * new를 사용하지 않으면 this는 globla/window가 된다.
 * new를 사용하면 새로운 인스턴스를 가리킨다.
 */
function Person(name) {
  if(this instanceof Person) {
    this.name = name;
  } else {
    throw new Error('new 연산자를 사용하세요.');
  }
}

// 허나 이것은 강제되지 못했다.
const p1 = new Person('호랑이');
const p2 = Person.call(p1, '호랑이');
console.log(p1);
console.log(p2);

/**
 * 새로운 new 연산자 사용 강제 방식
 */
function Animal(name) {
  if(new.target !== undefined) {
    this.name = name;
  } else {
    throw new Error('new 연산자를 사용하세요.');
  }
}

/**
 * 추상클래스로 활용
 */

class Father {
  constructor() {
    if (new.target === Father) {
      throw new Error('this is abstract class.');
    }
    console.log('test');
  }
}

class Son extends Father {
  constructor() {
    super();
  }
}
new Son();
new Father();
