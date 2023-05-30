class Animal {
  constructor(name, age, color, legs) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
  }
  getName() {
    return this.name;
  }
  getAge() {
    return this.age;
  }
  getColor() {
    return this.color;
  }
  getLegs() {
    return this.legs;
  }
  makeSound() {
    return 'I am an animal and I make sounds!';
  }
}

class Dog extends Animal {
  constructor(name, age, color, legs) {
    super(name, age, color, legs);
  }
  getInfo() {
    return `${this.name} is a dog, ${this.age} years old, ${this.color} with ${this.legs} legs. `;
  }
  makeSound() {
    return 'Woof, woof!';
  }
}

const dog = new Dog('Rex', 3, 'black', 4);

console.log(dog.getInfo());

class Cat extends Animal {
  constructor(name, age, color, legs) {
    super(name, age, color, legs);
  }

  getInfo() {
    return `${this.name} is a cat, ${this.age} years old, ${this.color} with ${this.legs} legs.`;
  }
  makeSound() {
    return 'Meow, meow!';
  }
}

const cat = new Cat('Marcus', 5, 'brown', 4);

console.log(cat.getInfo());

console.log(cat.makeSound());

class Statistics {
  constructor(arr) {
    this.arr = arr;
  }

  count() {
    return this.arr.length;
  }

  sum() {
    return this.arr.reduce((a, b) => a + b, 0);
  }

  min() {
    return Math.min(...this.arr);
  }

  max() {
    return Math.max(...this.arr);
  }

  range() {
    const sortedData = this.arr.sort((a, b) => a - b);
    return sortedData[sortedData.length - 1] - sortedData[0];
  }

  mean() {
    return this.sum() / this.count();
  }

  median() {
    const sortData = this.arr.sort((a, b) => a - b);
    const mid = Math.floor(sortData.length / 2);
    if (sortData % 2 === 0) {
      return (sortData[mid - 1] + sortData[mid]) / 2;
    }
    return sortData[mid];
  }

  mode() {
    const frequencyMap = {};
    let maxFrequency = 0;
    let modes = [];
    for (let i = 0; i < this.arr.length; i++) {
      const value = this.arr[i];

      frequencyMap[value] = frequencyMap[value] ? frequencyMap[value] + 1 : 1;

      if (frequencyMap[value] > maxFrequency) {
        maxFrequency = frequencyMap[value];
        modes = [{ value: value, count: frequencyMap[value] }];
      } else if (frequencyMap[value] === maxFrequency) {
        modes.push(value);
      }
    }
    return modes;
  }

  var() {
    const mean = this.mean();
    const squaredDifferences = this.arr.map(value => Math.pow(value - mean, 2));
    const sumSquaredDiff = squaredDifferences.reduce(
      (acc, value) => acc + value,
      0
    );
    return sumSquaredDiff / this.count();
  }

  std() {
    return Math.sqrt(this.var());
  }
  freqDist() {
    const frequencyMap = {};
    for (let i = 0; i < this.count(); i++) {
      const value = this.arr[i];
      frequencyMap[value] = frequencyMap[value] ? frequencyMap[value] + 1 : 1;
    }
    return frequencyMap;
  }

  describe() {
    console.log('Count: ', this.count());
    console.log('Minimum: ', this.min());
    console.log('Maximun: ', this.max());
    console.log('Sum: ', this.sum());
    console.log('Range: ', this.range());
    console.log('Mean: ', this.mean());
    console.log('Median: ', this.median());
    console.log('Mode: ', this.mode());
    console.log('Variance: ', this.var());
    console.log('Standard Deviation: ', this.std());
    console.log('Frequency Distribution: ', this.freqDist());
  }
}

const ages = [
  31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37,
  31, 34, 24, 33, 29, 26,
];

const calc = new Statistics(ages);

calc.describe();

class PersonAccount {
  constructor(firstName, lastName, incomes, expenses) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.incomes = new Map();
    this.expenses = new Map();
  }

  addIncome(description, amount) {
    this.incomes.set(description, amount);
  }
  addExpenses(description, amount) {
    this.expenses.set(description, amount);
  }

  totalIncome() {
    let total = 0;
    for (let amount of this.incomes.values()) {
      total += amount;
    }
    return total;
  }

  totalExpenses() {
    let total = 0;
    for (let amount of this.expenses.values()) {
      total += amount;
    }
    return total;
  }

  accountBalance() {
    return this.totalIncome() - this.totalExpenses();
  }

  accountInfo() {
    console.log(`Account Holder: ${this.firstName} ${this.lastName}`);
    console.log(`Total Income: $${this.totalIncome()}`);
    console.log(`Total Expense: $${this.totalExpenses()}`);
    console.log(`Account Balance: $${this.accountBalance()}`);
  }
}

const person = new PersonAccount('Ion', 'Vasile');

person.addIncome('Salary', 1000);
person.addExpenses('Utilities', 500);
person.addIncome('Lotery', 10000000);
person.addExpenses('New house', 500000);

person.accountInfo();
