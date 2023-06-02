const helloWorld = function () {
  const name = 'Nicolae';
  function printMessage(name) {
    console.log(`Hello ${name}!`);
  }
  return printMessage(name);
};

helloWorld();

const primeFunction = function () {
  let count = 0;
  function randomNumber() {
    const randomNum = Math.floor(Math.random() * 10);
    count += randomNumber;
    return count;
  }

  function halfNumber() {
    return count / 2;
  }

  function addOne() {
    return count++;
  }

  return {
    randomNumber: randomNumber(),
    halfNumber: halfNumber(),
    addOne: addOne(),
  };
};

function personAccount(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
  this.incomes = new Map();
  this.expenses = new Map();

  this.totalIncome = function () {
    let total = 0;
    for (let income of this.incomes.values()) {
      total += income;
    }
    return total;
  };

  this.totalExpense = function () {
    let total = 0;
    for (let expense of this.expenses.values()) {
      total += expense;
    }
    return total;
  };

  this.accountInfo = function () {
    return `Account Information:\nName: ${this.firstname} ${
      this.lastname
    }\nIncome: ${this.totalIncome()}\nExpense: ${this.totalExpense()}\nBalance: ${this.accountBalance()}`;
  };

  this.addIncome = function (description, amount) {
    this.incomes.set(description, amount);
  };

  this.addExpense = function (description, amount) {
    this.expenses.set(description, amount);
  };

  this.accountBalance = function () {
    return this.totalIncome() - this.totalExpense();
  };
}
