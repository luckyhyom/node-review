class A {
  hi() {
    console.log(this);
  }
}

class B {
  hi = () => {
    console.log(this);
  }
}

console.log('----A----');
console.dir(A);
console.dir(new A());
console.log('----B----');
console.dir(B);
console.dir(new B());