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

/**
 * property가 아닌 함수를 받아서 반복문 활용성 높아짐
 * 인자와 반환값으로 상호작용 함 (외부에 직접적으로 영향을 끼치지 않음)
 * 추상화 (코드 중복을 줄임)
 */

const names = [];
for (const p of products) {
  names.push(p.name)
};
const prices = [];
for (const p of products) {
  prices.push(p.price)
};

const map = (f, iter) => {
  const res = [];
  for (const a of iter) {
    res.push(f(a));
  }
  return res;
}
const names2 = map(p => p.name, products);
const prices2 = map(p => p.price, products);
const descriptions = map(p => p.description, products);
const froms = map(p => p.from, products);
const expiry_dates = map(p => p.expiry_date, products);
