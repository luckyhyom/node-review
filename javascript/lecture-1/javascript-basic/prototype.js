/**
 * 정재남 name property에서 prototype에 대해 좀 이해가 된 것 같음
 */
class F {
  static method1 () {}
  method2 () {}
}

function G() { };
G.method1 = function () {};
G.prototype.method2 = function () {}; // 새로 생성된 인스턴스가 자신의 메소드처럼 사용할 수 있다.

function H() { };
H.isH = function () {}; // 이거슨 인스턴스에게 제공하지 않는다.
H.prototype = G; // 인스턴스에게 제공할 메소드를 정의하는 prototype 박스에 G를 덧붙인다.
H.prototype.method3 = function () {}; // 보이는 그대로 그저 G에 새로운 method3을 덧붙이는 형식이다.
