const firstName = 'Nicolae';
const lastName = 'Cojocaru';
const age = 27;
const country = 'Romania';
const city = 'Negresti';

localStorage.setItem('firstName', firstName);
localStorage.setItem('lastName', lastName);
localStorage.setItem('age', age);
localStorage.setItem('country', country);
localStorage.setItem('city', city);

// console.log(localStorage);

const student = {
  firstName: 'Nicolae',
  lastName: 'Cojocaru',
  age: 27,
  skills: ['HTML', 'CSS', 'JavaScript'],
  country: 'Romania',
  enrolled: {
    math: true,
    science: false,
    history: true,
  },
};

const studentJSON = JSON.stringify(student);
// console.log(studentJSON);
localStorage.setItem('student', studentJSON);

const personAccount = {
  firstName: 'Ion',
  lastName: 'Vasile',
  incomes: new Map(),
  expenses: new Map(),
  addIncome(description, amount) {
    this.incomes.set(description, amount);
  },
  addExpenses(description, amount) {
    this.expenses.set(description, amount);
  },
  accountBalance() {
    return this.totalIncome() - this.totalExpenses();
  },
  totalIncome() {
    let total = 0;
    for (let amount of this.incomes.values()) {
      total += amount;
    }
    return total;
  },
  totalExpenses() {
    let total = 0;
    for (let amount of this.expenses.values()) {
      total += amount;
    }
    return total;
  },
  accountInfo() {
    console.log(`Account Holder: ${this.firstName} ${this.lastName}`);
    console.log(`Total Income: $${this.totalIncome()}`);
    console.log(`Total Expense: $${this.totalExpenses()}`);
    console.log(`Account Balance: $${this.accountBalance()}`);
  },
};

const personAccountJSON = JSON.stringify(
  personAccount,
  function (key, value) {
    if (typeof value === 'function') {
      return value.toString();
    } else {
      return value;
    }
  },
  1
);

localStorage.setItem('personAccount', personAccountJSON);

const storedJsonString = localStorage.getItem('personAccount');

// Parse the JSON string back into an object
const storedPersonAccount = JSON.parse(storedJsonString, function (key, value) {
  if (typeof value === 'string' && value.includes(key && '(')) {
    const newValue = value.replace(key, 'function');
    return newValue;
  }
  return value;
});

const newPersonAccount = {};

for (let key in storedPersonAccount) {
  if (
    typeof storedPersonAccount[key] === 'string' &&
    storedPersonAccount[key].startsWith('function')
  ) {
    console.log(storedPersonAccount[key]);
    const method = new Function(storedPersonAccount[key]);
    newPersonAccount[key] = method;
  } else {
    newPersonAccount[key] = storedPersonAccount[key];
  }
}

// console.log(newPersonAccount.addExpenses('test', 100));

console.log(storedPersonAccount);
