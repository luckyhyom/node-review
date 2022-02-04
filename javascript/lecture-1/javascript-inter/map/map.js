/**
 * iterable: 순회 가능한 객체
 * Object는 iterable하지 않다.
 */

const o = {a:1, b:2, c:3};
Object.prototype.method = function() {};
/**
 * 객체 고유의 property인지, 아니면 프로토타입 체이닝상의 상위의 property인지 판단하지 않음.. 그냥 임시 구현된 fake임
 * toString 등은 enumerable하지 않고 숨김처리 되어있어 나오지 않음
 */
for (let key in o) {
  console.log(key, o[key])
}

for (let key in o) {
  if(o.hasOwnProperty(key)){
    console.log(key, o[key]) 
  }
}