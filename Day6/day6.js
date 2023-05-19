/*
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

let i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}

let j = 0;
do {
  console.log(j);
  j++;
} while (j <= 10);


for (let i = 10; i >= 0; i--) {
  console.log(i);
}

let i = 10;
while (i >= 0) {
  console.log(i);
  i--;
}

let j = 10;
do {
  console.log(j);
  j--;
} while (j >= 0);


let n = 18;
for (let i = 0; i <= n; i++) {
  console.log(i);
}


let symbol = '';
for (let i = 0; i <= 7; i++) {
    symbol += '#';
    console.log(symbol);
}

for (let i = 0; i <= 10; i++) {
    console.log(`${i} x ${i} = ${i * i}`);
}

console.log('i i^2  i^3');
for (let i = 0; i <= 10; i++) {
  console.log(`${i} ${i ** 2} ${i ** 3}`);
}



for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}



for (let i = 0; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}


for (let num = 0; num <= 100; num++) {
  let isPrime = true;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
  if (num > 1 && isPrime) {
    console.log(num);
  }
}

let sum = 0;
for (let i = 0; i <= 100; i++) {
  sum += i;
}
console.log(`The sum of all numbers from 0 to 100 is ${sum}`);



let sumEven = 0;
let sumOdd = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    sumEven += i;
  } else {
    sumOdd += i;
  }
}
const arr = [sumEven, sumOdd];

console.log(
  `The sum of all evens from 0 to 100 is ${sumEven}. And the sum of all odds from 0 to 100 is ${sumOdd}`
);
console.log(arr);

const arr = [];
for (let i = 0; i < 5; i++) {
  arr.push(Math.trunc(Math.random() * 10));
}

console.log(arr);


const arr = [];
for (let i = 0; i <= 5; i++) {
  const randomNumber = Math.trunc(Math.random() * 10);
  if (!arr.includes(randomNumber)) {
    arr.push(randomNumber);
  }
}

console.log(arr);


const characters = 'abcdefghiklmnopqrstuvwxyz123456789';
let randomId = '';
for (let i = 0; i < 6; i++) {
  const randomIndex = Math.floor(Math.random() * characters.length);
  randomId += characters.charAt(randomIndex);
}
console.log(randomId);



const characters = 'abcdefghiklmnopqrstuvwxyz123456789';
let randomId = '';
const randomLenght = Math.trunc(Math.random() * 100);
for (let i = 0; i < randomLenght; i++) {
  const randomIndex = Math.floor(Math.random() * characters.length);
  randomId += characters.charAt(randomIndex);
}
console.log(randomId);



const characters = '123456789ABCDEF';
let randomHex = '#';
for (let i = 0; i < 6; i++) {
  const randomIndex = Math.floor(Math.random() * characters.length);
  randomHex += characters.charAt(randomIndex);
}

console.log(randomHex);



const randomRBG = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
  Math.random() * 256
)}, ${Math.floor(Math.random() * 256)})`;
console.log(randomRBG);
*/
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya',
  'United Kingdom',
  'Cuba',
  'Fiji',
];

/*
const upperCaseCountries = [];

for (let i = 0; i < countries.length; i++) {
  upperCaseCountries.push(countries[i].toUpperCase());
}

console.log(upperCaseCountries);

const countriesLength = [];

for (let i = 0; i < countries.length; i++) {
  countriesLength.push(countries[i].length);
}
console.log(countriesLength);



const countriesArr = [];

for (let i = 0; i < countries.length; i++) {
  const arr = [];
  arr.push(countries[i]);
  arr.push(countries[i].slice(0, 3).toUpperCase());
  arr.push(countries[i].length);
  countriesArr.push(arr);
}
console.log(countriesArr);


const landArr = [];

for (const countrie of countries) {
  if (countrie.includes('land')) {
    landArr.push(countrie);
  }
}
if (landArr.length === 0) {
  console.log('All these countries are without land');
} else {
  console.log(landArr);
}



const iaArr = [];
for (const countrie of countries) {
  if (countrie.endsWith('ia')) {
    iaArr.push(countrie);
  }
}

if (iaArr !== 0) {
  console.log(iaArr);
} else {
  console.log('These are countries ends without ia');
}


let longestCountrie = '';
for (let i = 0; i < countries.length; i++) {
  if (longestCountrie.length < countries[i].length) {
    longestCountrie = countries[i];
  }
}
console.log(longestCountrie);


let fiveCharCountrie = [];

for (const countrie of countries) {
  if (countrie.length === 5) {
    fiveCharCountrie.push(countrie);
  }
}
console.log(fiveCharCountrie);
*/

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB',
];

/*
let longestWord = '';
for (let i = 0; i < webTechs.length; i++) {
  if (longestWord.length < webTechs[i].length) {
    longestWord = webTechs[i];
  }
}
console.log(longestWord);



const newArr = [];
for (let i = 0; i < webTechs.length; i++) {
  const arr = [];
  arr.push(webTechs[i]);
  arr.push(webTechs[i].length);
  newArr.push(arr);
}

console.log(newArr);
*/

const mernStack = ['MongoDB', 'Express', 'React', 'Node'];

/*
let acronym = '';

for (let i = 0; i < mernStack.length; i++) {
  acronym += mernStack[i][0];
}

console.log(acronym);


for (let i = 0; i < webTechs.length; i++) {
  console.log(webTechs[i]);
}

for (const tech of webTechs) {
  console.log(tech);
}


const fruitArr = ['banana', 'orange', 'mango', 'lemon'];

let start = 0;
let end = fruitArr.length - 1;

while (start < end) {
  const temp = fruitArr[start];
  fruitArr[start] = fruitArr[end];
  fruitArr[end] = temp;
  start++;
  end--;
}

console.log(fruitArr);


const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB'],
];

for (let i = 0; i < fullStack.length; i++) {
  for (j = 0; j < fullStack[i].length; j++) {
    console.log(`${fullStack[i][j]}\n`);
  }
}
*/

const newCountiesArr = countries.slice();

console.log('Countries original array', countries);
console.log('Countries copy array', newCountiesArr);

const sortedCountries = newCountiesArr.sort();
console.log('Countries copy array sorted', newCountiesArr);

const newWebTechs = webTechs.slice().sort();
const newMercStack = mernStack.slice().sort();

const arr = [];
for (const countrie of countries) {
  if (countrie.includes('land')) {
    arr.push(countrie);
  }
}

let countrieName = '';
for (const countrie of countries) {
  if (countrieName.length < countrie.length) {
    countrieName = countrie;
  }
}
console.log(countrieName);

let fourWordCountrie = [];
for (const countrie of countries) {
  if (countrie.length === 4) {
    fourWordCountrie.push(countrie);
  }
}

console.log(fourWordCountrie);

let composeCountrieName = [];
for (const countrie of countries) {
  if (countrie.split(' ').length > 1) {
    composeCountrieName.push(countrie);
  }
}
console.log(composeCountrieName);

const reverseCountries = sortedCountries.reverse();
let capitalizedCountries = [];
for (const countrie of reverseCountries) {
  const capitalized = countrie.toUpperCase();
  capitalizedCountries.push(capitalized);
}

console.log(capitalizedCountries);
