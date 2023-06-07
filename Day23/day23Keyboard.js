const text = document.createElement('h1');
const number = document.createElement('h2');

document.body.appendChild(text);
document.body.appendChild(number);

document.body.style.display = 'flex';
document.body.style.flexDirection = 'column';
document.body.style.alignItems = 'center';
document.body.style.justifyContent = 'center';

text.textContent = 'Press any keyboard key';

const textKey = document.querySelector('h1');
const numberContent = document.querySelector('h2');

document.addEventListener('keyup', function (e) {
  if (e.key === ' ') {
    textKey.textContent = `You pressed Space`;
    numberContent.textContent = e.keyCode;
  } else {
    textKey.textContent = `You pressed ${e.key}`;
    numberContent.textContent = e.keyCode;
  }
  console.log(e.key);
});
