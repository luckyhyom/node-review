// 클래스 안에서의 this 바인딩
class A {
    a = 'i am class A';
    log() {
        console.log(this);
    }
}

class B {
    b = 'i am class B';
    log = () => {
        console.log(this);
    }
}

// this의 주체가 동적으로 변한다.
var a = new A();
var b = {
    a: 'i am object b',
    b: a.log
}
b.b();

// arrow function을 통해 this를 클래스에 고정시킨다.
var a = new B();
var b = {
    a: 'i am object b',
    b: a.log
}
b.b();


function Person(name) {
    this.name = name;
}

var a = Person('hi');
console.log(globalThis.name);

// new로 인스턴스 생성시, 생성자 this 바인딩
var a = new Person('hi');
console.log(a.name);
