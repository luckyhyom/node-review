const products = [
  {
    name: '사과',
    price: 1000,
  },
  {
    name: '배',
    price: 2000,
  },
  {
    name: '포도',
    price: 2200,
  },
  {
    name: '딸기',
    price: 8000,
  },
]

const names = [];
for (const p of products) {
  names.push(p.name)
};

/**
 * property가 아닌 함수를 받아서 반복문 활용성 높아짐
 * 인자와 반환값으로 상호작용 함 (외부에 직접적으로 영향을 끼치지 않음)
 * 추상화
 */
const map = (f, iter) => {
  const res = [];
  for (const a of iter) {
    res.push(f(a));
  }
  return res;
}

const names2 = map(p => p.name, products);
const names3 = products.map(p => p.name);
console.log(names);
console.log(names2);
console.log(names3);
