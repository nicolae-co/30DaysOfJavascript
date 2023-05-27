const constants = [2.72, 3.14, 9.81, 37, 100];

const [e, pi, gravity, humanBodyTemp, waterBoilingtemp] = constants;
// console.log(e, pi, gravity, humanBodyTemp, waterBoilingtemp);

const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway'];

const [fin, est, sw, den, nor] = countries;
// console.log(fin, est, sw, den, nor);

const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60,
};

const { width, height, area, perimeter } = rectangle;
// console.log(width, height, area, perimeter);

const users = [
  {
    name: 'Brook',
    scores: 75,
    skills: ['HTML', 'CSS', 'JS'],
    age: 16,
  },
  {
    name: 'Alex',
    scores: 80,
    skills: ['HTML', 'CSS', 'JS'],
    age: 18,
  },
  {
    name: 'David',
    scores: 75,
    skills: ['HTML', 'CSS'],
    age: 22,
  },
  {
    name: 'John',
    scores: 85,
    skills: ['HTML'],
    age: 25,
  },
  {
    name: 'Sara',
    scores: 95,
    skills: ['HTML', 'CSS', 'JS'],
    age: 26,
  },
  {
    name: 'Martha',
    scores: 80,
    skills: ['HTML', 'CSS', 'JS'],
    age: 18,
  },
  {
    name: 'Thomas',
    scores: 90,
    skills: ['HTML', 'CSS', 'JS'],
    age: 20,
  },
];

const personWithLessThanTwoSkills = function (array) {
  for (const { name, scores, skills, age } of array) {
    let person = { name, skills: skills.length };
    if (person.skills < 2) {
      console.log(person);
    }
  }
};
// personWithLessThanTwoSkills(users);

import countriesData from '../Day9/countries_data.js';

const printData = function (arr) {
  for (const { name, capital, population, languages } of arr) {
    const languagesFormated = languages.slice(0).join(', ');
    console.log(
      `${name} has the capital ${capital}, an population of ${population} and the languages spoken are ${languagesFormated}.`
    );
  }
};

// console.log(printData(countriesData));

const studentPrime = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]];
const [name, skills, [, , jsScore, reactScore]] = studentPrime;
console.log(name, skills, jsScore, reactScore);

const students = [
  ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
  ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]],
];

const convertArrayToObject = function (arr) {
  let newArr = [];
  for (const [name, skills, scores] of arr) {
    newArr.push({ name, skills, scores });
  }
  return newArr;
};

console.log(convertArrayToObject(students));

const student = {
  name: 'David',
  age: 25,
  skills: {
    frontEnd: [
      { skill: 'HTML', level: 10 },
      { skill: 'CSS', level: 8 },
      { skill: 'JS', level: 8 },
      { skill: 'React', level: 9 },
    ],
    backEnd: [
      { skill: 'Node', level: 7 },
      { skill: 'GraphQL', level: 8 },
    ],
    dataBase: [{ skill: 'MongoDB', level: 7.5 }],
    dataScience: ['Python', 'R', 'D3.js'],
  },
};

const studentCopy = { ...student };

studentCopy.skills.frontEnd.push({ skill: 'Bootstrap', level: 8 });
studentCopy.skills.backEnd.push({ skill: 'Express', level: 9 });
studentCopy.skills.dataBase.push({ skill: 'SQL', level: 8 });
studentCopy.skills.dataScience.push('SQL');

console.log(studentCopy);
