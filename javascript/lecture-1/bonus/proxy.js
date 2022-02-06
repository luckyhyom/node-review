const me = {
  age: 10,
  power: 21,
}

const proxy = new Proxy(me, {
  get (trapTarget, key, receiver) {
    console.log(trapTarget, key, receiver);
    if(!(key in receiver)) {
      throw new TypeError(`property ${key} doesn't exist.`);
    }
    return Reflect.getOwnPropertyDescriptor(trapTarget, key, receiver)
  }
});

console.log(proxy.age);
console.log(proxy.name);