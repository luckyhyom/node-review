/**
 * then은 thenable한것만 가능하다.
 * resolve 또는 reject 된 것 (settled)
 * 
 * pending (unsettled) 상태는 then을 타지 않는다.
 * 
 * promise는 무한히 지속 가능하다.
 * error가 발생해도 promise를 반환하기 때문이다.
 * 이러한 이유로 에러가 발생해도 전체 프로그램이 중단되지 않도록 할때 사용 가능하다.
 * 
 * 
 * promise 체이닝
 * 1. 일반 값(Promise 외의 모든 값)은 return 할 때 resolved된 Promise객체를 반환한다.
 * 2. Promise객체를 리턴하면 resolved되었을때 then으로 넘어간다.
 * 3. 참고로 아무것도 리턴하지 않으면 JS 특성상 undefined를 자동으로 리턴한다.
 */

new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('첫번째 프라미스')
  }, 1000)
}).then(res => { //1초뒤 then실행
  console.log(res) // 첫번째 출력
  return '두번째 프라미스'
}).then(res => {
  console.log(res) //두번째 출력
  return new Promise((resolve, reject) => {
    setTimeout(() => {
          resolve('세번째 프라미스')
    }, 1000)
  })
}).then(res => { // then 할때 promise 생성 (X) -> resolve된 뒤에 then실행됨
  console.log(res) // 1초 뒤 세번째
  return new Promise((resolve, reject) => {
    setTimeout(() => {
          reject('네번째 프라미스')
    }, 1000)
  })
}).then(res => {
  console.log(res) // 넷
}).catch(err => {
  console.error(err)
  return new Error('이 에러는 then에 잡힙니다.')
}).then(res => {
  console.log(res)
  throw new Error('이 에러는 catch에 잡힙니다.')
}).then(res => {
  console.log('출력 안됨')
}).catch(err => {
  console.error(err)
})

console.log('hi');