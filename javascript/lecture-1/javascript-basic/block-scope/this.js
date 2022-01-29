var value = 0;
var obj = {
    value: 1,
    // 메소드
    setValue: function () {
        this.value = 2;
        // 함수 (객체에 할당된 함수가 아님)
        (function () {
            this.value = 3;
        })();
    }
}

obj.setValue();
console.log(value); // 0 (window에서는 3이 나온다. var는 전역객체에 할당되므로 (window 또는 global))
console.log(obj.value); // 2

// this를 obj에 고정하는 방법들..
var value = 0;
var obj = {
    value: 1,
    setValue: function () {
        this.value = 2;
        var self = this;
        (function () {
            self.value = 3;
        })();
    }
}

var value = 0;
var obj = {
    value: 1,
    setValue: function () {
        this.value = 2;
        var a = function () {
            this.value = 3;
        }
        a.call(this);
    }
}

var value = 0;
var obj = {
    value: 1,
    setValue: function () {
        this.value = 2;
        {
            this.value = 3;
        }
    }
}

// ES6에서도 함수는 기본적으로 this가 글로벌이다.