/**
 * 함수는 실행되는 순간 실행컨텍스트가 열리며
 * 1. 호이스팅
 * 2. this 바인딩
 * 3. 외부 변수 참조
 */
var funcs = [];
for (var i = 0; i < 10; i++) {
    funcs.push(function () {
        console.log(i);
    });
}
funcs.forEach(function(f) {
    f();
});

// i를 전역변수에서 나중에 읽는 것이 아니라, 처음부터 값을 부여해야한다.

// 1. 클로저를 활용한다.
var funcs = [];
for (var i = 0; i < 10; i++) {
    // 즉시 실행되는 함수이므로 실행 후 결과 값이 저장된다.
    funcs.push((function (v) {
        return function () {
            // v는 외부에 있는 스코프 (선언 될 때 있는 스코프에 있는 변수를 참조)
            console.log(v);
        }
    })(i));
}
funcs.forEach(function(f) {
    f();
});

/**
 * let을 이용할 시 각각의 i값마다 별도로 스코프가 생성된다.
 * i를 지역변수로 만드는 것이라고 이해하면 될까?
 */
var funcs = [];
for (let i = 0; i < 10; i++) {
    funcs.push(function () {
        console.log(i);
    });
}
funcs.forEach(function(f) {
    f();
});