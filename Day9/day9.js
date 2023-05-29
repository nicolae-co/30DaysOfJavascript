// const countries = [
//   'Finland',
//   'Sweden',
//   'Denmark',
//   'Norway',
//   'Ethiopia',
//   'IceLand',
// ];
// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];
/*

const callback = function (element) {
  //   console.log(element);
};

// countries.forEach(callback);
// names.forEach(callback);
// numbers.forEach(callback);

const uppercaseCountries = countries.map(
  element => element[0].toUpperCase() + element.slice(1)
);

// console.log(uppercaseCountries);

const countriesLenght = countries.map(element => element.length);
// console.log(countriesLenght);

const numbersSquare = numbers.map(number => number ** 2);
// console.log(numbersSquare);

const uppercaseNames = names.map(name => name.toUpperCase());
// console.log(uppercaseNames);

const productPrice = products.map(product => {
  return `${product.product}: ${
    typeof product.price !== 'string' ? product.price : '0'
  }$`;
});
// console.log(productPrice);

const landCountries = countries.filter(element =>
  element.toLowerCase().includes('land')
);
console.log(landCountries);

const sixLetterCountries = countries.filter(countrie => countrie.length > 6);
console.log(sixLetterCountries);

const countrieStartWithE = countries.filter(countrie =>
  countrie.toLowerCase().startsWith('e')
);
console.log(countrieStartWithE);

const onlyPricesWithValue = products.filter(
  item => typeof item.price === 'number' && item.price !== ''
);

console.log(onlyPricesWithValue);

const setStringLists = function (arr) {
  return arr.filter(
    item =>
      typeof item === 'string' && typeof item !== ' ' && typeof item !== ''
  );
};

// console.log(setStringLists(names));
// console.log(setStringLists(countries));
// console.log(setStringLists(products));
// console.log(setStringLists(numbers));

const sumNumbers = numbers.reduce((a, b) => a + b, 0);
console.log(sumNumbers);

const concatCountries = countries.reduce(
  (a, b) =>
    `${a} ${
      countries.indexOf(b) === countries.length - 1
        ? `and ${b} are north European countries`
        : `, ${b}`
    }`
);
console.log(concatCountries);

const namesMoreSeven = names.some(name => name.length > 7);
console.log(namesMoreSeven);

const namesContainLand = countries.every(countrie =>
  countrie.toLowerCase().includes('land')
);
console.log(namesContainLand);

const firstSixLettersCountrie = countries.find(
  countrie => countrie.length === 6
);
console.log(firstSixLettersCountrie);

const firstSixLettersCountrieIndex = countries.findIndex(
  countrie => countrie.length === 6
);
console.log(firstSixLettersCountrieIndex);

// const findNorway = countries.findIndex(
//   countrie => countrie.toLowerCase() === 'norway'
// );
// console.log(findNorway);

function findCountrieIndex(arr, countrie) {
  return arr.findIndex(item => item.toLowerCase() === countrie);
}

console.log(findCountrieIndex(countries, 'norway'));
console.log(findCountrieIndex(countries, 'russia'));

*/

import countriesData from './countries_data.js';
import countriesArr from './countries.js';

const productPriceSum = products
  .filter(item => typeof item.price === 'number')
  .map(item => item.price)
  .reduce((a, b) => a + b, 0);
// console.log(productPriceSum);

const productPriceSumReduce = products.reduce((acc, item) => {
  if (typeof item.price === 'number') {
    return acc + item.price;
  } else {
    return acc;
  }
}, 0);
// console.log('Total price: ', productPriceSumReduce);

// console.log(countriesArr);

const commonPattern = function (arr, pattern) {
  return arr.filter(item => item.includes(pattern));
};

// console.log(commonPattern(countriesArr, 'or'));

const letterCounter = function (arr) {
  return arr.map(item => {
    const letters = item.split('');
    let count = 0;
    letters.forEach(letter => {
      if (letters[0].toLowerCase() === letter.toLowerCase()) {
        count++;
      }
    });
    return { [letters[0]]: count };
  });
};

// console.log(letterCounter(countriesArr));

const firstTenCountries = function (arr) {
  const newArr = [];
  arr.map(item => {
    if (arr.indexOf(item) < 10) {
      newArr.push(item);
    }
  });
  return newArr;
};

// console.log(firstTenCountries(countriesArr));

const lastTenCountries = function (arr) {
  return arr.slice(arr.length - 10);
};
// console.log(lastTenCountries(countriesArr));

const mostUsedLetter = function (arr) {
  const count = {};
  const firstLetter = arr.map(item => item.split('')[0]);
  firstLetter.forEach(letter => (count[letter] = (count[letter] || 0) + 1));
  const sortedArray = Object.entries(count).sort((a, b) => a[1] - b[1]);
  return sortedArray[sortedArray.length - 1];
};

// console.log(mostUsedLetter(countriesArr));

const sortByName = function (arr, sortBy) {
  return arr.sort((a, b) => {
    const countryNameA = a[sortBy];
    const countryNameB = b[sortBy];

    if (countryNameA < countryNameB) {
      return -1;
    }
    if (countryNameA > countryNameB) {
      return 1;
    }
    return 0;
  });
};

//console.log('sort by name', sortByName(countriesData, 'name'));
//console.log('sort by population', sortByName(countriesData, 'population'));
//console.log('sort by capital', sortByName(countriesData, 'capital'));

const mostSpokenLanguages = function (arr, top) {
  const count = {};
  const languages = arr.map(item => item.languages);
  languages.forEach(language =>
    language.forEach(lang => {
      if (count[lang]) {
        count[lang]++;
      } else {
        count[lang] = 1;
      }
    })
  );

  const countArr = [];
  for (let language in count) {
    countArr.push({ language: language, count: count[language] });
  }

  const sortedCountArr = countArr.sort((a, b) => b.count - a.count);
  return sortedCountArr.slice(0, top);
};

console.log(mostSpokenLanguages(countriesData, 10));

const mostPopulatedCountries = function (arr, top) {
  const count = [];
  const populations = arr.map(item => {
    count.push({ country: item.name, population: item.population });
  });
  const sortedCount = count.sort((a, b) => b.population - a.population);
  return sortedCount.slice(0, top);
};

console.log(mostPopulatedCountries(countriesData, 10));

const ages = [
  31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37,
  31, 34, 24, 33, 29, 26,
];

const statistics = {
  data: [],
  addData(sample) {
    this.data = sample;
  },
  count() {
    return this.data.length;
  },
  sum() {
    return this.data.reduce((a, b) => a + b, 0);
  },
  min() {
    return this.data.sort((a, b) => a - b)[0];
  },
  max() {
    return this.data.sort((a, b) => b - a)[0];
  },
  range() {
    const sortedData = this.data.sort((a, b) => a - b);
    return sortedData[sortedData.length - 1] - sortedData[0];
  },
  mean() {
    const sum = this.data.reduce((a, b) => a + b, 0);
    return sum / this.data.length;
  },
  median() {
    const sort = this.data.sort((a, b) => a - b);
    const mid = Math.floor(sort.length / 2);
    if (sort.length % 2 === 0) {
      return (sort[mid - 1] + sort[mid]) / 2;
    } else {
      return sort[mid];
    }
  },
  mode() {
    const frequencyMap = {};
    let maxFrequency = 0;
    let modes = [];

    for (let i = 0; i < this.data.length; i++) {
      const value = this.data[i];

      frequencyMap[value] = frequencyMap[value] ? frequencyMap[value] + 1 : 1;

      if (frequencyMap[value] > maxFrequency) {
        maxFrequency = frequencyMap[value];
        modes = [{ value: value, count: frequencyMap[value] }];
      } else if (frequencyMap[value] === maxFrequency) {
        modes.push(value);
      }
    }
    return modes;
  },
  var() {
    const mean = this.mean();
    const squaredDifferences = this.data.map(value =>
      Math.pow(value - mean, 2)
    );
    const sumSquaredDiff = squaredDifferences.reduce(
      (acc, value) => acc + value,
      0
    );
    return sumSquaredDiff / this.data.length;
  },
  std() {
    return Math.sqrt(this.var());
  },
  freqDist() {
    const frequencyMap = {};
    for (let i = 0; i < this.data.length; i++) {
      const value = this.data[i];
      frequencyMap[value] = frequencyMap[value] ? frequencyMap[value] + 1 : 1;
    }
    return frequencyMap;
  },
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
  },
};

statistics.addData(ages);

console.log(statistics.describe());
