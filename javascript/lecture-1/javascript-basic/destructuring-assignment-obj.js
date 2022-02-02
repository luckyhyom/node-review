const magicion = {
  power: 20,
  hp: 100,
  mp: 90
};

const { power: p, hp: h, mp: m } = magicion;
const { power, hp, mp, job = '비공개', version = 'V1' } = magicion; // 올수도 있고 안올수도 있는 데이터가 있을 때 기본값을 설정할 수 있다.

/**
 * 단지 객체안의 속성을 꺼내는 것 뿐 아니라
 * 원하는 속성을 고르고 변수명을 정할 수 있다.
 * 
 * 데이터를 추출 할 때 아래와 같은 복잡한 코드를 짤 필요가 없어진다.
 */

const deliveryProducts = {
  orderData: '2022-02-01',
  status: '배송중',
  products: [
    '사과',
    '두부',
    '오레오'
  ]
};

// const OD = deliveryProducts.orderData;
// if(deliveryProducts.status === undefined) {
//   deliveryProducts.status = '확인중'
// }
// deliveryProducts.products.shift();

const {
  orderData: od,
  status: st = '확인중',
  products: [, ...products]
} = deliveryProducts;

console.log(od, st, products);


// 원하는 정보만 가져오기
const info = { name: '효민', from: '제주도', habit: '...' };
const getInfo = ({ name, age = '정보없음' }) => {
  // const {name, age} = info;
};