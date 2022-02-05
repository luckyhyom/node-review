function delay(ms) {
  return new Promise((resolve, reject) => setTimeout(() => {
    resolve()
  }, ms));
}

async function a() {
  await delay(1000)
  return 'a'
}
async function b() {
  await delay(1000)
  return 'b'
}

async function No() {
  const A = await a(); // 생성하고 결과 기다림
  const B = await b(); // 생성하고 결과 기다림
  return [A, B];
}


// promiseAll로 구현 가능 (내부적으로 같은 로직)
async function parallel() {
  const A = a(); // 생성
  const B = b(); // 생성
  const aResult = await A;
  const bResult = await B; // 결과 기다림 (둘 다 거의 동시에 생성되었으므로, 병렬적인것처럼 동시에 실행됨)
  return [aResult,bResult];
}