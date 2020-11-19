/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (balance <= 0) {
    var result = null;
  } else if (isNaN(balance)) {
    result = null;
  } else if (balance > 0) {
    var account = new Account(this.nextAccountNumber, holder);
    account.deposit(balance);
    this.accounts.push(account);
    result = account.number;
    this.nextAccountNumber++;
  }

  return result;
};

Bank.prototype.getAccount = function (number) {
  var result;
  if (this.accounts.length > 0) {
    for (var i = 0; i < this.accounts.length; i++) {
      if (this.accounts[i].number === number) {
        result = this.accounts[i];
      }
    }

  } else {
    result = null;
  } return result;
};

Bank.prototype.getTotalAssets = function () {
  var result = 0;
  for (var i = 0; i < this.accounts.length; i++) {
    var account = this.accounts[i];
    result += account.getBalance();
  }
  return result;
};
