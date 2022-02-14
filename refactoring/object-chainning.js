class Wallet {
  constructor(owner) {
    this.owner = owner;
    this.stagingMoney = 0;
    this.availableMoney = 0;
  }
}

function orderStock(owner, price, count) {
  const wallet = new Wallet(owner);
  wallet.stagingMoney += price * count;
  wallet.availableMoney -= price * count;
}

class Wallet {
  constructor(owner) {
    this.owner = owner;
    this.stagingMoney = 0;
    this.availableMoney = 0;
  }

  hold(price) {
    this.stagingMoney += price;
    this.availableMoney -= price;
  }
}

function orderStock(owner, price, count) {
  const wallet = new Wallet(owner);
  wallet.hold(price * count);
}

// 에러처리까지 해야한다면?

class 지갑 {
  constructor(owner) {
    this.owner = owner;
    this.stagingMoney = 0;
    this.availableMoney = 0;
  }
}

class 주식지갑 {
  constructor(owner) {
    this.owner = owner;
    this.amount = 0;
    this.company = '';
  }
}
function 일부낙찰(owner, price, targetCount, succeedCount) {
  const wallet = new 지갑(owner);
  wallet.stagingMoney -= price * targetCount;
  wallet.availableMoney += price * (targetCount -= succeedCount);

  const stockWallet = new 주식지갑();
  stockWallet.amount += succeedCount;
}

class Wallet {
  constructor(owner) {
    this.owner = owner;
    this.stagingMoney = 0;
    this.availableMoney = 0;
  }

  hold(price) {
    if (this.availableMoney < price) throw new Error('no money');
    this.stagingMoney += price;
    this.availableMoney -= price;
  }

  release(price) {
    if (this.stagingMoney < price) throw new Error('no money');
    this.stagingMoney -= price;
    this.availableMoney += price;
  }

  withdraw(price) {
    if (this.availableMoney < price) throw new Error('no money'); // 서비스 로직에서 불필요하게 예외처리 할 필요가 없어진다. (가독성 떨어짐)
    this.availableMoney -= price;
  }
}

class 주식지갑 {
  constructor(owner) {
    this.owner = owner;
    this.amount = 0;
    this.company = '';
  }
}
function 일부낙찰과정(owner, price, targetCount, succeedCount) {
  const wallet = new Wallet(owner);
  wallet.release(price * targetCount); // 이름을 지어주어 이해하기 쉬워졌다.
  wallet.withdraw(price * succeedCount);

  const stockWallet = new 주식지갑();
  stockWallet.amount += succeedCount;
}

class Wallet {
  constructor(owner) {
    this.owner = owner;
    this.stagingMoney = 0;
    this.availableMoney = 0;
  }

  hold(amount) {
    if (this.availableMoney < amount) throw new Error('no money');
    this.stagingMoney += amount;
    this.availableMoney -= amount;
    return this;
  }

  release(amount) {
    if (this.stagingMoney < amount) throw new Error('no money');
    this.stagingMoney -= amount;
    this.availableMoney += amount;
    return this;
  }

  withdraw(amount) {
    if (this.availableMoney < amount) throw new Error('no money'); // 서비스 로직에서 불필요하게 예외처리 할 필요가 없어진다. (가독성 떨어짐)
    this.availableMoney -= amount;
    return this;
  }
}

function 일부낙찰과정(owner, price, targetCount, succeedCount) {
  const orderPrice = price * targetCount;
  const resultPrice = price * succeedCount;

  new Wallet(owner)
    .release(orderPrice)
    .withdraw(resultPrice);

  const stockWallet = new 주식지갑();
  stockWallet.amount += succeedCount;
}

function 일부낙찰(owner, price, targetCount, succeedCount) {
  const wallet = new 지갑(owner);
  
  if (wallet.stagingMoney < (price * targetCount)) throw new Error('no money');
  wallet.stagingMoney -= price * targetCount;
  wallet.availableMoney += price * targetCount;

  if (wallet.availableMoney < (price * succeedCount)) throw new Error('no money');
  wallet.availableMoney -= price * succeedCount;

  const stockWallet = new 주식지갑();
  stockWallet.amount += succeedCount;
}