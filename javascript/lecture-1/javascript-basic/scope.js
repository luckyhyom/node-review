/**
 * function scope
 * 함수에 의해 생성되는 변수의 유효 범위.
 * 이외의 중괄호는 유효범위를 생성하지 못한다.
 */
function scope(v) {
    // hoisting되며 선언과 undefined 할당이 동시에 일어남
    console.log(v);
    if(v) {
        var v = 'blue';
        console.log(v);
    }else {
        var v = 'red';
        console.log(v);
    }
    console.log(v);
}

scope(1);


/**
 * block scope
 * 블럭에 의해 생성되는 변수의 유효범위
 * let, const로 생성되는 es6의 변수는 모든 블럭(중괄호) 안에서 유효범위가 결정된다.
 */
let a = 10;
{
    let a = 20
    {
        let a = 30
        // 30
        console.log(a);
    }
    // 20
    console.log(a);
}
// 10
console.log(a);