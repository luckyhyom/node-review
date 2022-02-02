
function spy() {
  var f = arguments.callee.caller;
  console.log(f.prototype);
  console.log(f.length);
  console.log(f.arguments);
  console.log(f);
}

function callerABC(a,b,c) {
  spy()
}

callerABC(1,2,3,4,5)