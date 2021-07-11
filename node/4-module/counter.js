let count = 0;

function increase() {
    count++;
}

function getCount() {
    return count;
}

//1.nodejs에서 만든.. 2.js자체적으로 만든 최신..

// count는 외부에 노출하지 않고,외부에서는 명령어를 통해서만 제어.
module.exports.getCount = getCount;
module.exports.increase = increase;

// 다른 오브젝트로 덮어씌워질수있으므로 주의할 것 :)
exports = {}; 