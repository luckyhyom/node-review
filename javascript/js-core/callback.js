/**
 * 미리 정해놓은 방식의 함수에 인자로써 전달하는 함수를 콜백함수라고 한다.
 * 시점, 인자, this에 무엇을 바인딩 할지에 대한 제어권을 넘긴다.
 */

var obj = {
    info: 'obj',
    log: function(v, i) {
        console.log(this, v, i);
    }
}
// obj가 호출하므로써 this(주체)는 obj이다.
obj.log(1,2);

/**
 * 1. 콜백 함수는 메서드가 아니다.
 * 2. log는 obj가 호출하지 않았다.
 */
arr.forEach(obj.log);