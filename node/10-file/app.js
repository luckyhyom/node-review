const fs = require('fs');

// 3
// rename(...., callback(error,data)) 비동기
// renameSync(....) 동기 try,catch
// promises.rename().then().catch(0)

// 에러 발생 시 노드가 죽는다.. => try,catch 사용
try {
    // 실행되는 경로 기준이므로, 이 폴더에 들어와서 실행해야한다.
    fs.renameSync('./file.txt', './file-new.txt');
} catch (error) {
    console.log(error);
}

// 비동기이므로 콜백함수..
fs.rename('./text-new.txt','./text.txt',(error)=>{
    console.log(error);
});
console.log('hello');

// 쓰기와 덮어쓰기
fs.promises.rename('./text2.txt','./text-new.txt')//
.then(()=>console.log('done'))
.catch(console.log);
// 붙이기
fs.appendFile('./text.txt','appended!');

// copy
fs.copyFile('./file.txt','./file2.txt');

//비동기는 순서가 보장이 되지 않기 때문에, then을 사용한다.


fs.mkdir('sub-folder')
.catch(console.error);

fs.readdir('./')
.then(console.log)
.catch(cnosole.error);