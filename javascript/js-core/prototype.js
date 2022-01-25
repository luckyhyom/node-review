class Person {

    constructor(a) {
        this.a = a;
    }
}
console.log(new Person.prototype.constructor(1));
const p = new Person(2);
console.log(new p.__proto__.constructor(3));
console.log(new p.constructor(4));
// console.log(new Object.getPrototypeOf(p).constructor(5));