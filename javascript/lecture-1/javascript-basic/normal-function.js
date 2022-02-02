'use strict' // 스트릭트 모드가 아닌 것은 sloppy mode라고 부른다. 참고로 es6는 자동으로 use strict 설정 되어있음

/**
 * function은 호이스팅 되면서 선언,초기화,할당이 동시에 이루어므로 TDZ없이 실행 가능하다.
 * ES6는 함수또한 블럭스코프에 갇힌다.
 */
a();
{
  function a() {
    console.log(true);
  }
}
a();
/*
 * 그냥 function declaration을 쓰지 말자.
 * 1. arrow function
 * 2. 객체: 메소드축약형 (concise method)
 * 3. 생성자 함수: class
 * 4. 같은 함수선언문이 있을 시 호이스팅되며 cascading된다. 즉 처음 선언한 함수는 마지막 선언된 함수에 덮어씌어진다.
 *    이런 경우를 방지하기 위하여 '함수선언문'대신 '함수표현식'(함수를 변수에 할당하는 방식)을 이용하기를 권장했다.
 *    그리고 이러한 방식을 더 편하게 사용하기 위해 arrow function으로 개선이 되었다.
 */
function nono() { }
const good = function goood() {}
const good2 = function () { }
const good3 = () => {};
