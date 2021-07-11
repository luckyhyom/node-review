console.log('test');
console.clear();

// false일때만 로그 찍힘.
console.assert(2===3, 'not same');

const student = {name:'h', age:1};
console.log(student);
console.table(student);
console.dir(student);

// 얼만큼의 시간이 걸렸는지 성능 테스트
console.time();
for (let i = 0; i < 10; i++) {
    console.log(i);
}
console.timeEnd();

// 몇번 호출됐는지
function a() {
    console.count('a function');
}

a();
console.countReset('a function');
a();

// 어디서 호출되었는지
console.trace();