/*
const age = prompt('Enter your age:');
if (age >= 18) {
  alert(`You are old enough to drive.`);
} else {
  alert(
    `You are left with ${18 - age} year${18 - age === 1 ? '' : 's'} to drive.`
  );
}


const yourAge = prompt('Enter your age:');
const myAge = 27;

if (myAge >= yourAge) {
  alert(`I am ${myAge - yourAge} years older than you`);
} else {
  alert(`You are ${yourAge - myAge} years older than me`);
}


let a = 4,
  b = 3;
// if else
if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${a} is less than ${b}`);
}
// ternary operator
console.log(a > b ? `${a} is greater than ${b}` : `${a} is less than ${b}`);

const numberPromt = prompt('Enter a number:');
if (numberPromt % 2 === 0) {
    alert(`${numberPromt} is an even number`);
} else {
    alert(`${numberPromt} is an odd number`);
}


const grade = prompt('Enter grade:');
if (grade >= 90 && grade <= 100) {
  alert('A');
} else if (grade >= 70 && grade < 90) {
  alert('B');
} else if (grade >= 60 && grade < 70) {
  alert('C');
} else if (grade >= 50 && grade < 60) {
  alert('D');
} else if (grade >= 0 && grade < 50) {
  alert('F');
} else {
  alert('Insert a valid grade!');
}


const season = prompt('Enter month:').toLowerCase();
switch (season) {
  case 'september':
  case 'octomber':
  case 'november':
    alert('Autumn');
    break;
  case 'december':
  case 'january':
  case 'february':
    alert('Winter');
    break;
  case 'march':
  case 'april':
  case 'may':
    alert('Spring');
    break;
  case 'june':
  case 'july':
  case 'august':
    alert('Summer');
    break;
  default:
    alert('Insert valid month!');
}


const day = prompt('Enter day:').toLowerCase();

switch (day) {
  case 'monday':
  case 'tuesday':
  case 'wednesday':
  case 'thursday':
  case 'friday':
    alert(`${day[0].toUpperCase()}${day.slice(1)} is a workind day!`);
    break;
  case 'saturday':
  case 'sunday':
    alert(`${day[0].toUpperCase()}${day.slice(1)} is a weekend day!`);
    break;
  default:
    alert('Insert valid day!');
}

*/

const month = prompt('Enter month:').toLowerCase();
const year = new Date().getFullYear();
switch (month) {
  case 'january':
  case 'march':
  case 'may':
  case 'july':
  case 'august':
  case 'octomber':
  case 'december':
    alert('31 days');
    break;
  case 'april':
  case 'june':
  case 'september':
  case 'november':
    alert('30 days');
    break;
  case 'february':
    alert(
      `${
        (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
          ? '29 days'
          : '28 days'
      }`
    );
    break;
  default:
    alert('Insert valid month!');
}
