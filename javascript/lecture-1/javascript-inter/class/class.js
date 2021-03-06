function createSlide() {
  var index = 0; // closer
  console.log('hello!');
  function next() { // closer
    index++;
    console.log(index);
  }
  return next;
};

const slide1 = createSlide();
const slide2 = createSlide();

slide1();
slide1();
slide2();
slide2();
slide2();
slide2();
console.log(slide1 === slide2);

/**
 * 함수를 만듦으로써 코드의 중복을 없앨 수 있지만
 * 
 * 1. next 함수는 index를 외부참조하기 위해 createSlide라는 함수가 지워지지 못하고 클로저가 된다. (메모리에 계속 남아있는다.)
 * 2. next라는 함수를 매번 메모리에 새로 등록한다? createSlide는 참조가 가능하지만 next는 지역변수라 매번 새롭게 데이터를 만든다?
 * 
 * class를 사용해 next를 구현하면 class에서 정의된 하나의 메소드를 참조하므로 (상속) 메모리를 아낄 수 있다. 
 * 추가해야할 함수가 많아진다면 더욱 클래스를 사용해야한다.
 * + 여기에 추가로 arrow function을 사용하면 this와 생성자함수,등도 함께 포함하지 않으므로 더욱 가벼운 인스턴스가 된다.
 * 
 * 인스턴스를 생성할때 클래스를 참조하므로써 성능상 유리하다면 싱글톤은 메모리 관리에 유의미한가..?
 */

class Slide {
  constructor() {
    this.index = 0;
    console.log('class!');
  }
  next() {
    this.index++;
    console.log(this.index);
  }
};

const slide3 = new Slide();
const slide4 = new Slide();

slide3.next();
slide4.next();


for (let i = 0; i < 5; i++) {
  /**
   * setTimeout은 i를 찾기위해 내부와 외부를 검사한다.
   * var는 블럭스코프에 갇히지 않고 전역으로 등록된다.
   * 하지만 let은 블럭스코프에 갇히기 때문에 i를 외부에서 참조하려면 지역변수 i를 기억하고 있어야한다.
   * 첫번째 for에서 i는 0이라는 주소를 가리킨다. (그 순간의 i를 기억한다. => 스냅)
   * 
   */
  // 
  // 하지만 let은 블럭스코프에 갇혀 전역에 등록되지 못하므로 setTimeout은 
  function a() {
    console.log(i);
    setTimeout(() => {
    }, 0);
  }
  a();
}