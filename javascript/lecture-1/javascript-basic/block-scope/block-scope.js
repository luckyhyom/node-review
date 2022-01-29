/**
 * var는 block scope를 무시한다. (블럭에 갇히지 않는다.)
 * ES6에서 탄생한 let, const는 block scope가 유효하다. 즉 블럭 안에 갇힌다!
 */
{
    var a = 2;
    if (a > 1) {
        // 블럭이 뭐야?
        var b = a * 3;
        console.log(b);
    } else {
        var b = a / 3;
        console.log(b);
    }
    console.log(b);
}

{
    let a = 2;
    if (a > 1) {
        // 나는 블럭 안에만 존재해! -> 나는 지역변수야! 함수가 아닌 다른 중괄호(블럭)에서도!
        var b = a * 3;
        console.log(b);
    } else {
        var b = a / 3;
        console.log(b);
    }
    console.log(b);
}