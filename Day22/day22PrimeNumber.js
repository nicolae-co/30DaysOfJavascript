function isPrime(number) {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  console.log(number);
  return true;
}

document.body.style.display = 'flex';
document.body.style.flexWrap = 'wrap';

for (let i = 0; i <= 100; i++) {
  const number = document.createElement('h1');
  number.style.width = '100px';
  number.style.margin = '2px';
  number.style.textAlign = 'center';
  number.style.color = 'white';
  number.textContent = i;

  if (i % 2 === 0) {
    number.style.backgroundColor = 'mediumseagreen';
  } else {
    number.style.backgroundColor = 'tomato';
  }
  if (isPrime(i)) {
    number.style.backgroundColor = 'gold';
  }

  document.body.appendChild(number);
}
