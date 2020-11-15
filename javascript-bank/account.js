/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (amount === false) {
    var result = false;
  } else if (amount <= 0) {
    result = false;
  } else if (isNaN(amount)) {
    result = false;
  } else if (amount > 0) {
    result = true;
    this.transactions.push({ deposit: amount });
  }
  return result;
};

Account.prototype.withdraw = function (amount) {
  if (amount > 0) {
    var result = true;
    this.transactions.push({ withdraw: amount });
  } else if (amount <= 0) {
    result = false;
  } else if (isNaN(amount)) {
    result = false;
  }

  return result;
};

Account.prototype.getBalance = function () {
  var deposits = [];
  var withdraws = [];

  if (this.transactions.length === 0) {
    var balance = 0;
  }

  for (var i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].deposit !== undefined) {
      deposits.push(this.transactions[i].deposit);
    } else {
      withdraws.push(this.transactions[i].withdraw);
    }
  }

  var depositsSum = deposits.reduce(function (a, b) {
    return a + b;
  }, 0);

  var withdrawsSum = withdraws.reduce(function (a, b) {
    return a + b;
  }, 0);

  balance = depositsSum - withdrawsSum;

  return balance;
};
