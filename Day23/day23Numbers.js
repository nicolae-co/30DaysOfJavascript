const body = document.querySelector('body');
const main = document.createElement('main');
const title = document.createElement('h1');
const subTitle = document.createElement('h3');
const author = document.createElement('h5');
const searchBar = document.createElement('div');
const errorMessage = document.createElement('p');
const input = document.createElement('input');
const searchBtn = document.createElement('button');
const numbers = document.createElement('div');

title.textContent = 'Number Generator';
subTitle.textContent = '30DaysOfJavaScript';
author.textContent = 'Author: Nicolae Cojocaru';
searchBtn.textContent = 'Generate numbers';

numbers.style.display = 'flex';
numbers.style.flexWrap = 'wrap';

body.style.display = 'flex';
body.style.flexDirection = 'column';
body.style.alignItems = 'center';

title.style.color = 'mediumseagreen';

errorMessage.style.color = 'tomato';

body.appendChild(main);
body.appendChild(title);
body.appendChild(subTitle);
body.appendChild(author);
body.appendChild(errorMessage);
body.appendChild(searchBar);
body.appendChild(numbers);

searchBar.appendChild(input);
searchBar.appendChild(searchBtn);

function isPrime(number) {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function reset() {
  inputValue.value = '';
  numbers.innerHTML = '';
}

const errMsg = document.querySelector('p');
const inputValue = document.querySelector('input');
const generateNumbers = document.querySelector('button');

generateNumbers.addEventListener('click', function () {
  const input = parseInt(inputValue.value);

  if (isNaN(input)) {
    errMsg.textContent = 'Please insert a number!';
    reset();
  } else {
    errMsg.textContent = '';
    reset();
    for (let i = 1; i <= input; i++) {
      const number = document.createElement('h1');
      number.textContent = i;
      number.style.width = '100px';
      number.style.height = '50px';
      number.style.margin = '2px';
      number.style.textAlign = 'center';

      if (i % 2 === 0) {
        number.style.backgroundColor = 'mediumseagreen';
      } else {
        number.style.backgroundColor = 'tomato';
      }
      if (isPrime(i)) {
        number.style.backgroundColor = 'gold';
      }

      numbers.appendChild(number);
    }
  }
});
