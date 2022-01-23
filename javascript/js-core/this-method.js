function a(x, y, z) {
    console.log(this, x, y, z);
}

var obj1 = {
    info: 'this is obj1'
};

// 함수의 this를 어떤 것을 바인딩 할지 개발자가 결정할 수 있다.

// call
a.call(obj1, 1, 2, 3);

// apply
a.apply(obj1, [1, 2, 3]);

// bind
a.bind(obj1)(1, 2, 3);
// 등록만 하고 나중에 사용 가능, 매개변수 미리 등록 가능
var binded = a.bind(obj1, 1);
binded(2,3);