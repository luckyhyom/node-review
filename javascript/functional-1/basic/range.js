const add = (a, b) => {
  return a + b;
}
const reduce = (f, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }
  for (const a of iter) {
    acc = f(acc, a);
  }
  return acc;
}
const range = (l) => {
  const res = [];
  let i = -1;
  while (++i < l) res.push(i);
  return res;
}

console.log(reduce(add, range(5)));