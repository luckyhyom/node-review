const people = [
  { name: '김효민', age: 27 },
  { name: '김말이', age: 17 },
]

const filter = (f, iter) => {
  const res = [];
  for (const a of iter) {
    if (f(a)) res.push(a);
  }
  return res;
}

const person = filter(p => p.name === '김효민', people);
console.log(person);