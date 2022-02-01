/**
 * undefined || 누락된 값만 default value가 적용된다.
 * null, 0, false는 그대로 출력.
 */

function fn(a = 1, b = 2, c = 3, d = 4) {
  console.log(a,b,c,d);
}

fn(undefined, false, null);

function fn2(a = 1, b = a === 2, c) {
  console.log(a, b);
}

fn2(1);

function notCalled() {
  throw new Error('it is not called');
}
function fn3(a = notCalled()) {
  console.log(a);
}

fn3();