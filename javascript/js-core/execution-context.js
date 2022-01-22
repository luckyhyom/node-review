var a = 1;

function outer() {
    console.log(a);
    function inner() {
        /**
         * innser의 실행컨텍스트가 실행되면 environment record를 가장 먼저 수집한다.
         * var a;
         * undefined (var의 특성상 undefined로 선언과 동시에 초기화)
         * a = 2;
         * 
         * let의 경우.. 내부환경을 설정하며 a에 대해 새로 기록하고나서 undefined로 초기화하지 않기때문에 참조할 수 없다는 에러가 발생.
         * 스코프의 시작 지점부터 초기화 단계 시작 지점까지 변수를 참조할 수 없는 일시적 사각지대(Temporal Dead Zone: TDZ) 구간에 존재한다.
         * let a;
         * Reference Error!
         */
        console.log(a);
        var a = 2;
    }
    inner();
    console.log(a);
}

outer();
console.log(a);
