const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
const countries = ['Finland', 'Sweden', 'Norway'];

const newSet = new Set();

for (const countrie of countries) {
  newSet.add(countrie);
}

console.log(newSet);

newSet.delete('Finland');
console.log(newSet);

newSet.clear();
console.log(newSet);

const languages = [
  'English',
  'Finnish',
  'English',
  'French',
  'Spanish',
  'English',
  'French',
  'Romanian',
];

for (const language of languages) {
  newSet.add(language);
}
console.log(newSet);

const newCountriesArray = countries.map(countrie => [
  countrie,
  countrie.length,
]);
console.log(newCountriesArray);

const newMap = new Map(newCountriesArray);
console.log(newMap);

// a union b
console.log(new Set([...a, ...b]));

// a intersection b
let A = new Set(a);
let B = new Set(b);

let c = a.filter(num => B.has(num));
let C = new Set(c);
console.log(C);

// a with b
let d = a.filter(num => !B.has(num));
console.log(d);
let D = new Set(d);
console.log(D);

import countriesData from '../Day9/countries_data.js';

const mostSpokenLanguages = function (arr, top) {
  const languageCount = new Map();

  for (const country of arr) {
    for (const language of country.languages) {
      if (languageCount.has(language)) {
        languageCount.set(language, languageCount.get(language) + 1);
      } else {
        languageCount.set(language, 1);
      }
    }
  }

  console.log(languageCount);
  const sortedLanguages = Array.from(languageCount.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, top);

  const result = sortedLanguages.map(([language, count]) => ({
    [language]: count,
  }));
  return result;
};

console.log(mostSpokenLanguages(countriesData, 10));
