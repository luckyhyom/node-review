/**
 * 전역공간: 런타임에 따라 전역객체의 정보가 달라진다.
 * - global / window
 * 
 * 함수 호출:
 * - 전역객체를 가리킨다.
 * - es6에서는 함수에서의 this가 전역객체를 가리키는것이 문제라고 판단하여 arrow function을 만들었다.
 *   - arrow function은 바로 위의 execution context를 그대로 가져다 쓴다.
 *   - arrow function은 원본(또는 상속받은) 클래스의 this 바인딩을 유지한다.
 *     - A 클래스의 this호출 메소드를 B클래스에 할당하면 this가 B를 가리키는데, arrow function은 이를 방지한다.
 */


/**
 * 메서드 호출
 * 메서드란? 객체의 행위가 되는 함수를 메서드라고 칭한다.
 * 이때 메서드의 this는 행위의 주체인 객체를 가리킨다.
 */
var a = {
    b: {
        c: function () {
            console.log(this);
        }
    }
}
a.b.c();

// lexicalEnvironment를 통한 this 바인딩
var obj = {
    a: 20,
    b: function(ss) {
        var self = this;
        function test() {
            // 객체의 행위인 메서드가 아니므로 this는 global을 가리킨다.
            console.log(this);

            // 실행환경을 검색하고, 위의 this를 찾는다. 이때 b는 메서드이므로 obj를 가리킨다.
            console.log(self);
        }
        test();
    }
}

obj.b();


/**
 * 콜백 호출
 * 콜백을 받아서 사용하는 주체에 따라 this가 달라진다.
 * 기본적으로 함수 호출을 할 때 처럼 this는 global을 가리키지만
 * 콜백함수를 사용하는 주체가 bind등의 메소드를 이용한다면 this는 달라질 수 있다.
 */

var callback = function () {
    console.log(this);
}
var obj1 = {
    info: 'i am a obj1'
}
// bind의 탄생으로 함수로 감싸서 this를 지정하지 않아도 바인딩을 할 수 있게 되었다.
setTimeout(callback.bind(obj1), 0);
setTimeout(function() {
    // ...
}.bind(obj1), 0);


/**
 * 무조건 arrow function을 사용할 수는 없는게..
 * 객체안에 함수를 정의할때 arrow function의 this는 전역이 된다.
 * 객체의 메소드 일때는 function, 클래스안의 메소드일때는 arrow function
 */



/**
 * function
 */

// var call = () => {
//     console.log(this);
// }
// function call () {
//     console.log(this);
// }
var abc = {
    a:'sss',
    b: () => {
        console.log(this);
        // function inner() {
        //     console.log(this);
        // }
        // inner();
    }
}

abc.b.bind(abc);

// var abc = {
//     b: function() {
//         console.log(this);
//         inner = () => {
//             console.log(this);
//         }
//         inner();
//     }
// }
abc.b();