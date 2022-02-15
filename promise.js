const promiseFunction = () =>
  new Promise((resolve) => setTimeout(() => resolve("result"), 500));


async function test() {
  // Array(10)
  //     .fill(0)
  //     .forEach(async () => {
  //         const result = await promiseFunction();
  //         console.log(result);
  //     });
  // for (let i = 0; i < 10; i++) {
  //   const result = await promiseFunction();
  //   console.log(result);
  // }

  // for (let i = 0; i < this.length; i++) {
  //   callback(this[i], i, this);
  // }

  [0,1,2,3,4].map(async (i) => {
    // 각각의 원소가 가진 로직의 실행순서는 순차적이지만, 각각의 원소 순차적이진 않다. 이전 원소의 로직이 완료된것과 상관 없이 다음 원소의 로직은 실행된다.
    // 즉, 모든 원소에 대해 아래 로직을 뿌리기때문에 첫번째 로그가 제일 먼저 세번이 호출된다.
    // 아래에 있는 것은 await된 코드들때문에 늦게 실행되는 것. 절차지향적으로 읽는 것은 맞음. 다만 await를 만나면 결과값 받을때까지 기다리지 않고 다음코드 실행하는 것
    
    console.log(i, `나는 ${i}의 첫번째 로그`);
    const result = await promiseFunction();
    console.log(result, `나는 ${i}의 두번째 로그`);
    promiseFunction().then((res) => console.log(2));
    const result2 = await promiseFunction();
    console.log(result2, `나는 ${i}의 세번째 로그`);
    promiseFunction().then((res) => console.log(3));
  })
  console.log('2');
}

test();