/**
 * var
 * 스코프를 무시한다. for문안의 중괄호도 사용할수있다.
 * 전역 객체에 등록된다.
 * 재선언이 가능하다.
 */

let test = 0;
for(var i=0; i<5; i++) {
    /**
     * i = undefined;
     * i = 0;
     * setTimeout
     * i = 1;
     * setTimeout
     * ...
     * setTimeout은 비동기이고 i에 대한 정보를 가지고있지 않으므로 1초뒤에 나타나서 i를 참조함
     * 
     * 즉, i는 스코프를 벗어나 전역에 등록되어, setTimeout은 자신의 실행정보에 i가 없으니 전역의 i를 참조한 것
     */
    setTimeout(function() {
        // console.log(i++);
        console.log(test);
    }, 1000);
}

/**
 * let은 이해가 안간다. i를 내부 실행정보에 포함시킨건가?
 * var는 전역으로 할당할수있는데 let은 그럴 수 없으니까.. 기억시키게 만들긴 한걸텐데 모르겠다
 */
for(let i=0; i<5; i++) {
    setTimeout(function() {
        console.log(i);
    }, 1000);
}

for(var i=0; i<5; i++) {
    /**
     * 함수에 인자를 등록하므로써 함수 고유의 정보가 생성된다.
     */
    (function (x) {
        setTimeout(function() {
            console.log(x);
        }, 1000);
    })(i)
}