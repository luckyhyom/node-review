class A {
  hi() {
    console.dir(this);
  }
}

class B {
  hi = () => {
    console.dir(this);
  }
}

const a = new A();
const aa = new A();
console.log(a.hi === aa.hi); // true

const b = new B();
const bb = new B();
console.log(b.hi === bb.hi); // false