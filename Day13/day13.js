import countriesArr from '../Day9/countries.js';
import countriesData from '../Day9/countries_data.js';
console.group('Countries Array');
console.table(countriesArr);
console.groupEnd();
console.group('Countires Object');
console.table(countriesData);
console.groupEnd();

console.assert(10 > 2 * 10, '10 is not greater than 2*10');
console.warn('This is an warning!');
console.error('This is an error!');

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.time('While loop:');
let i = 0;
while (i < arr.length) {
  console.log(arr[i]);
  i++;
}
console.timeEnd('While loop:');

console.time('Regular for');
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
console.timeEnd('Regular for');

console.time('for of loop');
for (const item of arr) {
  console.log(item);
}
console.timeEnd('for of loop');

console.time('forEach loop');
arr.forEach(item => console.log(item));
console.timeEnd('forEach loop');
