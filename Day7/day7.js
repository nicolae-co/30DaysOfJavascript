'use strict';
/*
function fullName() {
  console.log('Nicolae Cojocaru');
}
fullName();


function fullName(firstName, lastName) {
    console.log(`${firstName} ${lastName}`);
}

fullName('Nicolae', 'Cojocaru');



function addNumbers(a, b) {
  return a + b;
}

console.log(addNumbers(2, 3));

function areaOfRectangle(length, width) {
  return length * width;
}

console.log(areaOfRectangle(5, 5));

function perimetreOFRectangle(length, width) {
  return 2 * (length + width);
}
console.log(perimetreOFRectangle(5, 5));

function volumeOfRectPrism(length, width, height) {
  return length * width * height;
}
console.log(volumeOfRectPrism(5, 5, 5));

function areaOfcircle(r) {
  return Math.PI * r ** 2;
}

console.log(areaOfcircle(5));

function circumferenceOfCircle(r) {
  return 2 * Math.PI * r;
}
console.log(circumferenceOfCircle(5));

function density(mass, volume) {
  return mass / volume;
}

console.log(density(5, 5));

function speed(distance, time) {
  return distance / time;
}

console.log(speed(120, 2), 'km/h');

function weight(mass, gravity) {
  if (gravity === 9.807) {
    return mass;
  }
  return mass / gravity;
}

console.log(weight(75, 3.7));

function convertCelsiusToFarenheit(celsius) {
  return celsius * (9 / 5) + 32;
}

console.log(convertCelsiusToFarenheit(100));

function bodyMassIndex(weight, height) {
  const bmi = weight / height ** 2;
  let group;
  if (bmi < 18.5) group = 'Underweight';
  if (bmi >= 18.5 && bmi <= 24.9) group = 'Normal weight';
  if (bmi > 25 && bmi <= 29.9) group = 'Overweight';
  if (bmi > 30) group = 'Obese';
  return group;
}

console.log(bodyMassIndex(85, 1.8));

function checkSeason(month) {
  let season;
  switch (month) {
    case 'december':
    case 'january':
    case 'february':
      season = 'Winter';
      break;
    case 'march':
    case 'april':
    case 'may':
      season = 'Spring';
      break;
    case 'june':
    case 'july':
    case 'august':
      season = 'Summer';
      break;
    case 'september':
    case 'october':
    case 'november':
      season = 'Autumn';
      break;
    default:
      season = 'Not a valid month!';
  }
  return season;
}

console.log(checkSeason('apapappa'));

function findMax() {
  let max = 0;
  for (let i = 0; i <= arguments.length; i++) {
    if (max < arguments[i]) {
      max = arguments[i];
    }
  }
  return max;
}

console.log(findMax(4, 2, 566, 7, 5, 80, 10));



function solveLinEquation(a, b, c, x, y) {
  return a * x + b * y + c;
}

console.log(solveLinEquation(3, 4, 5, 1, 2));

function solveQuadEquation(a, b, c) {
  const discriminant = b * b - 4 * a * c;

  if (discriminant > 0) {
    const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    return [x1, x2];
  } else if (discriminant === 0) {
    const x = -b / (2 * a);

    return [x];
  } else {
    return [0];
  }
}

console.log(solveQuadEquation());

function printArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
printArray([1, 2, 3, 4, 5]);

function showDateTime() {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const formatedDate = `${day < 10 ? `0${day}` : day}/${
    month < 10 ? `0${month}` : month
  }/${year} ${hour < 10 ? `0${hour}` : hour}:${
    minutes < 10 ? `0${minutes}` : minutes
  }`;
  return formatedDate;
}

console.log(showDateTime());

function swapValues(a, b) {
  let temp = a;
  a = b;
  b = temp;

  return [a, b];
}

console.log(swapValues(1, 2));

function reverseArray(arr) {
  let min = 0;
  let max = arr.length - 1;

  while (min < max) {
    const temp = arr[min];
    arr[min] = arr[max];
    arr[max] = temp;
    min++;
    max--;
  }

  return arr;
}

console.log(reverseArray([1, 2, 3, 4, 5, 6, 7]));

function capitalizeArray(arr) {
  const capArr = [];
  for (const el of arr) {
    const capitalize = el[0].toUpperCase() + el.slice(1);
    capArr.push(capitalize);
  }
  return capArr;
}

console.log(capitalizeArray(['azi', 'maine', 'ieri']));

function addItem(item) {
  const arr = [];
  arr.push(item);
  return arr;
}

console.log(addItem('test'));

function removeItem(arr, index) {
  if (index => 0 && index < arr.length) {
    arr.splice(index, 1);
  }
  return arr;
}
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(removeItem(array, 3));

function sumOfNumbers(number) {
  let sum = 0;
  const strNumber = number.toString();
  for (const num of strNumber) {
    sum += +num;
  }
  return sum;
}

console.log(sumOfNumbers(2345));

function sumOfOdd(number) {
  let sum = 0;
  const strNumber = number.toString();
  for (const num of strNumber) {
    if (+num % 2 !== 0) {
      sum += +num;
    }
  }
  return sum;
}
console.log(sumOfOdd(12345));

function sumOfEven(number) {
  let sum = 0;
  const strNumber = number.toString();
  for (const num of strNumber) {
    if (+num % 2 === 0) {
      sum += +num;
    }
  }
  return sum;
}
console.log(sumOfEven(12345));

function evensAndOdds(number) {
  let evens = 0,
    odds = 0;
  if (number > 0) {
    for (let i = 1; i <= number; i++) {
      if (i % 2 === 0) {
        evens++;
      } else {
        odds++;
      }
    }
  }
  console.log('Odds:', odds);
  console.log('Evens:', evens);
}

console.log(evensAndOdds(12231789));

function returnSum() {
  let sum = 0;
  for (const arg of arguments) {
    sum += arg;
  }
  return sum;
}
console.log(returnSum(1, 2, 3, 4, 5, 6, 7));

function randomIpNumber() {
  let ip = '';
  for (let i = 0; i < 4; i++) {
    const randomNumber = Math.floor(Math.random() * 255);
    ip += `.${randomNumber}`;
  }
  return ip.slice(1);
}

console.log(randomIpNumber());

function randomMacAddress() {
  const characters = '123456789ABCDEF';
  let macAddress = '';
  for (let i = 0; i < 6; i++) {
    let twoChars = '';
    for (let i = 0; i < 2; i++) {
      const randomNumber = Math.floor(Math.random() * characters.length);
      twoChars += characters.charAt(randomNumber);
    }
    macAddress += `:${twoChars}`;
  }
  return macAddress.slice(1);
}
console.log(randomMacAddress());

function randomHexaNumberGenerator() {
  const characters = '123456789ABCDEF';
  let randomHex = '#';
  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomHex += characters.charAt(randomIndex);
  }
  return randomHex;
}

console.log(randomHexaNumberGenerator());

function userIdGenerator() {
  const characters = 'abcdefghiklmnopqrstuvwxyz123456789';
  let randomId = '';
  for (let i = 0; i < 7; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomId += characters.charAt(randomIndex);
  }
  return randomId;
}

console.log(userIdGenerator());
*/

// function userIdGenerator() {
//   const charNum = prompt('Please insert number of characters:');
//   const idsNum = prompt('Please insert number of ids:');
//   const characters = 'abcdefghiklmnopqrstuvwxyz123456789';

//   let ids = '';
//   for (let i = 0; i < idsNum; i++) {
//     let id = '';
//     for (let j = 0; j < charNum; j++) {
//       const randomIndex = Math.floor(Math.random() * characters.length);
//       id += characters.charAt(randomIndex);
//     }
//     ids += id + '\n';
//   }

//   return ids.trim();
// }

// console.log(userIdGenerator());

function rgbColorGenerator() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}

console.log(rgbColorGenerator());

function arrayOfHexaColors(number) {
  const characters = '123456789ABCDEF';
  let arr = [];
  for (let i = 0; i < number; i++) {
    let hex = '#';
    for (let j = 0; j < 6; j++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      hex += characters.charAt(randomIndex);
    }
    arr.push(hex);
  }
  return arr;
}

console.log(arrayOfHexaColors(3));

function arrayOfRgbColors(number) {
  const arr = [];
  for (let i = 0; i < number; i++) {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const rgbColor = `rgb(${red}, ${green}, ${blue})`;
    arr.push(rgbColor);
  }
  return arr;
}
console.log(arrayOfRgbColors(3));

function convertHexToRgb(hex) {
  hex = hex.replace('#', '');

  const red = parseInt(hex.substring(0, 2), 16);
  const green = parseInt(hex.substring(2, 4), 16);
  const blue = parseInt(hex.substring(4, 6), 16);

  return `rgb(${red},${green},${blue})`;
}

console.log(convertHexToRgb('#253753'));

function convertRgbToHex(rgb) {
  const regex = /\d+/g;
  const numbers = rgb.match(regex);
  const red = parseInt(numbers[0]);
  const green = parseInt(numbers[1]);
  const blue = parseInt(numbers[2]);

  const redHex = red.toString(16).padStart(2, '0');
  const greenHex = green.toString(16).padStart(2, '0');
  const blueHex = blue.toString(16).padStart(2, '0');

  const hexNumber = `#${redHex}${greenHex}${blueHex}`;
  return hexNumber;
}

console.log(convertRgbToHex('rgb(123,245,23)'));

function generateColors(type, number) {
  const arr = [];
  for (let i = 0; i < number; i++) {
    if (type === 'hexa') {
      const characters = '123456789ABCDEF';
      let hex = '#';
      for (let j = 0; j < 6; j++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        hex += characters.charAt(randomIndex);
      }
      arr.push(hex);
    }
    if (type === 'rgb') {
      const red = Math.floor(Math.random() * 256);
      const green = Math.floor(Math.random() * 256);
      const blue = Math.floor(Math.random() * 256);
      const rgb = `rgb(${red}, ${green}, ${blue})`;
      arr.push(rgb);
    }
  }
  return arr;
}

console.log(generateColors('rgb', 10));

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

console.log(shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, 9]));

function factorial(number) {
  let factorialNum = 1;
  for (let i = 1; i <= number; i++) {
    factorialNum *= i;
  }
  return factorialNum;
}

console.log(factorial(5));

function isEmpty(parameter = '') {
  if (parameter.length === 0) return `Parameter is empty`;
  else return `Parameter is not empty`;
}

console.log(isEmpty(12312));

function sum() {
  let sum = '';
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

console.log(sum('asd', 1));

function sumOfArrayElements(array) {
  let sum = 0;
  for (const el of array) {
    if (typeof el === 'number') {
      sum += el;
    } else {
      return `${el} is not a number`;
    }
  }

  return sum;
}

console.log(sumOfArrayElements([1, 'b', 3, 4, 5, 'a']));

function average(array) {
  let sum = 0;
  for (const el of array) {
    if (typeof el === 'number') {
      sum += el;
    } else {
      return `${el} is not a number`;
    }
  }
  return sum / array.length;
}

console.log(average([1, 'a', 3, 4, 5, 6, 7, 8, 9]));

function modifyArray(array) {
  if (array.length < 5) {
    return `Not found`;
  }
  array[4] = array[4].toUpperCase();
  return array;
}

console.log(
  modifyArray(['Avocado', 'Tomato', 'Potato', 'Mango', 'Lemon', 'Carrot'])
);
console.log(modifyArray(['Google', 'Facebook', 'Apple', 'Amazon']));

function isPrime(number) {
  if (number <= 1) {
    return `${number} is not prime`;
  }
  for (let i = 2; i < Math.sqrt(number); i++) {
    if (number % i === 0) return `${number} is not prime`;
  }

  return `${number} is prime`;
}

console.log(isPrime(34));

function unique(array) {
  const uniqueSet = new Set(array);
  return uniqueSet.size === array.length ? 'Unique' : 'Not unique';
}

console.log(unique([3, 4, 5, 6]));

function areAllTheSame(array) {
  if (array.length === 0) return true;
  const firstItemType = typeof array[0];
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] !== firstItemType) {
      return false;
    }
  }
  return true;
}

console.log(areAllTheSame([1, ' 2', 3, 4, 5, 6]));

function isValidVariable(variable) {
  if (variable.length === 0) false;

  const firstChar = variable[0];
  if (
    !(
      (firstChar >= 'a' && firstChar <= 'z') ||
      (firstChar >= 'A' && firstChar <= 'Z') ||
      firstChar === '$' ||
      firstChar === '_'
    )
  ) {
    return false;
  }
  return true;
}

console.log(isValidVariable('1asdsad'));

function getUniqueRandomNumbers() {
  const numbers = [];
  while (numbers.length < 7) {
    const randomNumber = Math.floor(Math.random() * 10);
    if (!numbers.includes(randomNumber)) {
      numbers.push(randomNumber);
    }
  }
  return numbers;
}

console.log(getUniqueRandomNumbers());

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

function reversArray(arr) {
  const arrCopy = arr.slice();
  return arrCopy.reverse();
}

console.log(reversArray(countries));
