/*
const firstName = 'Nicolae';
const lastName = 'Cojocaru';
const country = 'Romania';
const city = 'Negresti';
let age = 27;
let isMarried = false;
const year = 1995;

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

console.log(typeof '10' === typeof 10);
console.log(parseInt('9.8') === 10);

console.log(1 > 0);
console.log('10' == 10);
console.log(3 != 4);
console.log(1 < 0);
console.log('10' === 10);
console.log(3 === 4);


// 4 > 3             true
// 4 >= 3          true    
// 4 < 3           false
// 4 <= 3          false
// 4 == 4          true
// 4 === 4         true
// 4 != 4          false
// 4 !== 4         false
// 4 != '4'        false
// 4 == '4'        true
// 4 === '4'       fasle
// Find the length of python and jargon and make a falsy comparison statement.

console.log('------------');
console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != '4');
console.log(4 == '4');
console.log(4 === '4');
console.log(('python'.length = !'jargon'.length));

// 4 > 3 && 10 < 12            true
// 4 > 3 && 10 > 12            false
// 4 > 3 || 10 < 12            true
// 4 > 3 || 10 > 12            true
// !(4 > 3)                    false
// !(4 < 3)                    true
// !(false)                    true
// !(4 > 3 && 10 < 12)         false
// !(4 > 3 && 10 > 12)         true
// !(4 === '4')                true
// There is no 'on' in both dragon and python


console.log('----------------');
console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!false);
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === '4'));
console.log(!('dragon'.includes('on') && 'python'.includes('on')));



const date = new Date();

const year = date.getFullYear();
const month = date.getMonth();
const todayDate = date.getDate();
const day = date.getDay();
const hours = date.getHours();
const minutes = date.getMinutes();
const secondsElapsed = date.getTime();

console.log(year, month, todayDate, day, hours, minutes, secondsElapsed);

const base = prompt('Enter base:');
const heigth = prompt('Enter height:');
const area = 0.5 * base * heigth;
alert(`The area of the triangle is ${area}`);


const a = +prompt('Enter side a:');
const b = +prompt('Enter side b:');
const c = +prompt('Enter side c:');
const perimeter = a + b + c;
alert(`The perimeter of the triangle is ${perimeter}`);


const lenght = +prompt('Enter lenght:');
const width = +prompt('Enter width:');
const area = lenght * width;
alert(`Area is ${area}`);


const radius = +prompt('Enter radius', 'numbers only');
const PI = 3.14;
const area = PI * radius ** 2;
const circumference = 2 * PI * radius;
alert(`Area is: ${area}
Circumference is: ${circumference}`);


const slope1 = 2;
const slope2 = (10 - 2) / (6 - 2);
console.log(slope1, slope2);

const hours = prompt('Enter hours:');
const ratePerHour = prompt('Enter rate per hour:');
alert(`Your ${hours} hours earning is ${hours * ratePerHour}`);

console.log('Nicolae'.length > 7 ? 'Your name is long' : 'Your name is short');

const firstName = 'Nicolae';
const lastName = 'Cojocaru';

const result = firstName.length > lastName.length ? 'longer' : 'shorter';
console.log(
    `Your first name, ${firstName} is ${result} than your family name, ${lastName}`
    );
    
    

const myAge = 250;
const yourAge = 25;
console.log(`I am ${myAge - yourAge} older than you`);


const age = +prompt('Enter your age:');
alert(
  `Your are ${age}. You ${
    age >= 18
      ? 'are old enough to drive.'
      : `will be allowed to drive after ${18 - age} ${
          18 - age === 1 ? 'year' : 'years'
        }.`
  }`
);
07;


const years = prompt('Enter number of years you live');
alert(
    `${
        years > 100
        ? 'I don t belive you'
        : `You lived ${years * 365 * 24 * 60 * 60} seconds.`
    }`
    );
    
*/
const date = new Date();

const year = date.getFullYear();
const month = date.getMonth() + 1;
const todayDate = date.getDate() + 1;
const day = date.getDay();
const hours = date.getHours();
const minutes = date.getMinutes();
const secondsElapsed = date.getTime();

console.log(`${year}-${month + 1}-${todayDate + 1} ${hours}:${minutes}`);
console.log(`${todayDate + 1}-${month + 1}-${year} ${hours}:${minutes}`);
console.log(`${todayDate + 1}/${month + 1}/${year} ${hours}:${minutes}`);

console.log(
  `${year}-${month.toString().length === 1 ? `0${month}` : month}-${
    todayDate.toString().length === 1 ? `0${todayDate}` : todayDate
  } ${hours.toString().length === 1 ? `0${hours}` : hours}:${
    minutes.toString().length === 1 ? `0${minutes}` : minutes
  }
  `
);
