const EventEmitter = require('events');
const emitter = new EventEmitter();


class Logger extends EventEmitter {

    log(callback) {
        // 두번째에 들어가는게 뭘 의미하는지?emit이랑 on의 함수는 뭐가 다른지.
        // on은 콜백함수를 넣고 실행되는 애고.. emit은 콜백함수에 인자를 넣는 아이.
        // log라는 이벤트에 started라는 아이를 인자로 주겠다.
        this.emit('log','started...');
        callback();
        this.emit('log','ended!!');
    }

}

module.exports.Logger = Logger;