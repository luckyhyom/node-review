/**
 * 키 순서
 * 1. 숫자 정렬 (맨 앞이 0이라면 문자열로 처리)
 * 2. 문자열 입력 순서대로
 */
const obj = {
  2: 2,
  02: 2, // 2로 처리
  1: 1,
  'asc': 'b',
  'a': 'a',
  '01':1, // 문자열이므로 순서 x
  'ㅊㅁ': 1,
};


console.log([{...obj}]);

// 열거 순서를 엄격히 지키는 경우
Object.getOwnPropertyNames(obj);
Reflect.ownKeys(obj);
Object.assign(obj);

/**
 * ES5 하위문법인 경우 정합성을 보장하지 않음 (브라우저, 런타임 환경에 따라 달라짐)
 * for in
 * Object.keys()
 * JSON.stringify()
 */
