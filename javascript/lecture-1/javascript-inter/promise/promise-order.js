// 생성과 동시에 실행된다. (동기)
const a = new Promise((res,rej) => {
  res(3);
  rej();
  console.log(1);
});

/**
 * a를 then으로 호출하고 다음 줄로 넘어간다 (동기)
 * 호출은 하지만 promise가 settled 될때까지 then을 실행하지 않는다. (비동기)
 * 
 * 아래의 코드를 동기적으로 진행하면서 수시로 settled되었는지 확인한다.
 */
a.then(console.log);

console.log(2);
