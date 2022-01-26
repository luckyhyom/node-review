let extendsClass = (function() {
    function Bridge(){}
    return function(Parent, Child) {
        Bridge.prototype = Parent.prototype;
        Child.prototype = new Bridge();
        Child.prototype.constructor = Child;
        Child.prototype.superClass = Parent;
    }
})();

function Person(name, age) {
    this.name = name || 'no named';
    this.age = age || 'unknown';
}

Person.prototype.getName = function() {
    return this.name;
}
Person.prototype.getAge = function() {
    return this.age;
}

function Employee(name, age, position) {
    this.superClass(name, age);
    this.position = position || 'unknown';
}
extendsClass(Person, Employee);

Employee.prototype.getPosition = function() {
    return this.position;
}

const emp = new Employee('name', 11, 'A');

console.log(emp.getAge());