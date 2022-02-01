/**
 * arrow function은 this를 바인딩하지 않는다.
 * 즉, this자체를 가지고 있지 않기때문에 마치 외부 참조와 같은 현상이 일어난다.
 * 
 * this를 가지고 있지 않으므로 가벼워짐 -> 성능 향상!
 */

// 마치 이런식으로..
const obj = {
  reference() {
    const aThis = 'this';
    function fn() {
      console.log(aThis);
    }
  }
}

const arrObj = {
  arrowFn() {
    const fn = () => {
      console.log(this);
    }
    fn()
  }
}

arrObj.arrowFn();

const obj2 = {
  grades: [10,20],
  getTotal() {
    this.total = 0;
    this.grades.forEach(function(v) {
      this.total += v;
    }, this); // 함수는 this를 바인딩하기때문에 obj2를 바인딩하도록 명시해야함. 이 부분을 arrow로 할 시 this를 인자에 넘길 필요가 없어진다.
  }
}
obj2.getTotal()
console.log(obj2.total);

/**
 * arrow function은 말 그대로 함수로 동작하는데 적합하다.
 * 객체의 메소드로써 부적합하다. 이유는 this를 바인딩하지 않기 때문이다. 바로 위(외부)의 this를 참조한다.
 * ㅈㄴ 복잡하네
 * 
 * 클래스 내부에서는 this가 이미 클래스로 정의 되어있다.
 * 클래스의 arrow function을 사용하면, 그 arrow의 바로 위인 this를 가리키는 것이다.
 * 또한 call같은 함수로 this를 바인딩 할수도 없으므로 말그대로 그냥 class에 this가 딱 붙어있다.
 * 
 * function의 경우에는 부르는 인스턴스에 따라서 this가 바뀐다.
 * call로 바꿀수도 있다, 또는 다른 객체가 함수를 물려받아서 사용할수도 있다.
 * call을 this 바인딩에 쓸 수 있냐 없냐로 생각하면 될 것 같다.
 */

// this 바인딩 안함
const noneThisBinding = {
  grades: [10,20],
  log: () => {
    console.log(this);
  }
}
noneThisBinding.log();

// class의 this를 참조함 (정적임)
class Binding {
  constructor(name) {
    this.name = name;
    // this.age = 20;
  }
  log = () => {
    console.log(this.name, this.age);
  }
}
const binding = {};
binding.log = new Binding('gd').log;
binding.log();

class SonBinding extends Binding {
  constructor() {
    super()
    this.name = 'sync';
    this.age = 20
  }
}

new SonBinding('gd').log();

// this가 사용하는 객체에 따라 동적으로 변함
class AsyncBinding {
  constructor(name) {
    this.name = name;
  }
  log() {
    console.log(this.name, this.age);
  }
}

class SonAsyncBinding extends AsyncBinding{
  constructor() {
    super()
    this.name = 'async';
    this.age = 20;
  }
}
const abinding = {};
new SonAsyncBinding('gd').log();

/**
 * 결론! this는 원래 부르는 객체에 바인딩 된다.
 * 하지만 arrow function은 아예 this 바인딩을 하지 않기때문에 class안에서 this가 정적인 것이다. class의 this이기 때문.
 * 
 * normal function은 메소드가 되면 객체에 this가 바인딩 되고
 * 함수로써 있을 때는 글로벌에 바인딩된다.
 * 
 * arrow function
 * 1. this를 바인딩 하지 않는다. (메모리를 줄임으로써 성능 향상)
 * 2. this가 바인딩 되지 않으므로 객체의 메소드로써는 부적합하다.
 * 3. 하지만 class의 경우에는 this가 이미 정의되어 있으므로 class의 this를 참조하기때문에 오히려 적합!
 *    - 가볍다.
 *    - this가 class에 고정된다.
 *    - 바깥에 있는 this를 그대로 쓰고자 할 때 사용하자. (내부 함수, 클래스)
 */

// this 바인딩 안함
const noneThisBinding2 = {
  grades: [10,20],
  log: () => {
    console.log(this);
  }
}
noneThisBinding.log();

// this를 고정하므로 적절
class Binding2 {
  constructor(name) {
    this.name = name;
    // this.age = 20;
  }
  log = () => {
    console.log(this.name, this.age);
  }
}