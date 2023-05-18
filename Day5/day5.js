/*
const arr = [];

const arr2 = [1, 2, 3, 4, 5, 6];

console.log(arr2.length);

console.log('First item:', arr2[0]);
console.log('Middle item:', arr2[Math.trunc((arr2.length - 1) / 2)]);
console.log('Last item:', arr2[arr2.length - 1]);

const mixedDataTypes = [1, 'James', true, [1, 2, 3], 32, 'Fox'];
console.log(mixedDataTypes.length);

const itCompanies = [
  'Facebook',
  'Google',
  'Microsoft',
  'Apple',
  'IBM',
  'Oracle',
  'Amazon',
];

console.log(itCompanies);

console.log('Number of companies:', itCompanies.length);

console.log('First company:', itCompanies[0]);
console.log('Middle company:', itCompanies[(itCompanies.length - 1) / 2]);
console.log('Last company:', itCompanies[itCompanies.length - 1]);

console.log(
  itCompanies[0],
  itCompanies[1],
  itCompanies[2],
  itCompanies[3],
  itCompanies[4],
  itCompanies[5],
  itCompanies[6]
);

console.log(
  itCompanies[0].toUpperCase(),
  itCompanies[1].toUpperCase(),
  itCompanies[2].toUpperCase(),
  itCompanies[3].toUpperCase(),
  itCompanies[4].toUpperCase(),
  itCompanies[5].toUpperCase(),
  itCompanies[6].toUpperCase()
);

console.log(
  `${itCompanies[0]}, ${itCompanies[1]}, ${itCompanies[2]}, ${itCompanies[3]}, ${itCompanies[4]}, ${itCompanies[5]} and ${itCompanies[6]} are big IT companies.`
);

const randomNumber = Math.floor(Math.random() * itCompanies.length);

itCompanies.includes(itCompanies[randomNumber])
  ? console.log(itCompanies[randomNumber])
  : console.log('not found');

const sortReverse = itCompanies.sort().reverse();
console.log(sortReverse);
console.log(sortReverse.slice(3));
console.log(sortReverse.slice(0, 3));

// const middleIndex = Math.floor(itCompanies.length / 2);
// const removedCompanies = itCompanies.splice(
//   middleIndex,
//   itCompanies.length % 2 === 0 ? 2 : 1
// );
// console.log(removedCompanies);
console.log(sortReverse.pop());
console.log(sortReverse.splice(sortReverse.length / 2));


let text =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';

console.log(text.replace(/[,.]/g, '').split(' '));

const shoopingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

shoopingCart.unshift('Meat');
shoopingCart.push('Sugar');
console.log(shoopingCart.indexOf('Honey'));
shoopingCart.splice(shoopingCart.indexOf('Honey'), 1);
console.log(shoopingCart);
shoopingCart[shoopingCart.indexOf('Tea')] = 'Green Tea';
console.log(shoopingCart);


countries.includes('Ethiopia')
? console.log('ETHIOPIA')
: countries.push('Ethiopia');
console.log(countries);

webTechs.includes('Sass')
? console.log('Sass is a CSS preprocess')
: webTechs.push('Sass'),
console.log(webTechs);

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];

const fullstack = frontEnd.concat(backEnd);
console.log(fullstack);

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

const sortAges = ages.sort();
const min = sortAges[0];
const max = sortAges[sortAges.length - 1];

const median = (sortAges.length - 1) / 2;
console.log(median);
if (median % 2 === 0) {
  console.log(sortAges[median] / 2);
} else {
  console.log((sortAges[Math.floor(median)] + sortAges[Math.ceil(median)]) / 2);
}

const average =
  (ages[0] +
    ages[1] +
    ages[2] +
    ages[3] +
    ages[4] +
    ages[5] +
    ages[6] +
    ages[7] +
    ages[8] +
    ages[9]) /
  (ages.length - 1);

console.log('Range=', max - min);

console.log(Math.abs(min - average));
console.log(Math.abs(max - average));
*/
// const slicedCountries = countries.slice(0, 10);

// console.log(slicedCountries);

// const middleIndex = (slicedCountries.length - 1) / 2;
// console.log(middleIndex);
// Number.isInteger(middleIndex)
//   ? console.log(countries[middleIndex])
//   : console.log(
//       countries[Math.floor(middleIndex)],
//       countries[Math.ceil(middleIndex)]
//     );

const middleIndex = countries.length / 2;
console.log(countries.length - 1);
console.log(middleIndex);

let side1, side2;

if (Number.isInteger(middleIndex)) {
  side1 = countries.slice(0, Math.floor(middleIndex));
  side2 = countries.slice(Math.floor(middleIndex));
} else {
  side1 = countries.slice(0, Math.floor(middleIndex + 1));
  side2 = countries.slice(Math.floor(middleIndex + 1));
}

console.log(side1, side2);
