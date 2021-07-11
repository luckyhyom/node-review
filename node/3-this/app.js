// 함수안에서 this는 global
function whatisthis(){
    console.log('---function---');
    console.log(this);
}
whatisthis();

class WhatIsThis {
    constructor(num){
        this.num = num;
    }
    what(){
        console.log('---class---');
        console.log(this);
    }
}

const a = new WhatIsThis(1);
a.what();

console.log("---out---");
console.log(this);