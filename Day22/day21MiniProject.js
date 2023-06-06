const wrapper = document.querySelector('.wrapper');

wrapper.style.display = 'flex';
wrapper.style.flexDirection = 'column';
wrapper.style.justifyContent = 'center';
wrapper.style.alignItems = 'center';

const h1 = document.querySelector('h1');
const text = h1.textContent;
let words = text.split(' ');
let lastWord = words[words.length - 1];

setInterval(function () {
  let randomHex = '#' + Math.floor(Math.random() * 16777215).toString(16);

  if (lastWord.includes('<span')) {
    lastWord = lastWord.replace(
      /style="color:.*?;"/,
      'style="color: ' + randomHex + ';font-size:46px;"'
    );
  } else {
    lastWord =
      '<span style="color: ' +
      randomHex +
      ';font-size:46px;">' +
      lastWord +
      '</span>';
  }
  words[words.length - 1] = lastWord;
  const newText = words.join(' ');
  h1.innerHTML = newText;
}, 1000);

const h2 = document.querySelector('h2');
h2.style.textDecoration = 'underline';

const h3 = document.querySelector('h3');

const date = new Date();

const year = date.getFullYear();
const month = date.getMonth() + 1;
const todayDate = date.getDate() + 1;
const hours = date.getHours();
const minutes = date.getMinutes();

const created = `${year}/${
  month.toString().length === 1 ? `0${month}` : month
}/${todayDate.toString().length === 1 ? `0${todayDate}` : todayDate} ${
  hours.toString().length === 1 ? `0${hours}` : hours
}:${minutes.toString().length === 1 ? `0${minutes}` : minutes} ${
  hours >= 12 ? 'PM' : 'AM'
}`;

h3.textContent = created;
h3.style.padding = '12px 24px';

setInterval(function () {
  randomHex = '#' + Math.floor(Math.random() * 16777215).toString(16);
  h3.style.backgroundColor = randomHex;
}, 1000);

const challenges = document.querySelectorAll('li');

challenges.forEach(challenge => {
  challenge.style.display = 'flex';
  challenge.style.justifyContent = 'space-between';
  challenge.style.alignItems = 'center';
  challenge.style.listStyleType = 'none';
  challenge.style.padding = '6px 12px';
  challenge.style.textAlign = 'start';
  challenge.style.margin = '4px';
  challenge.style.width = '600px';
});

for (let i = 0; i < challenges.length; i++) {
  if (challenges[i].classList.contains('complete')) {
    challenges[i].style.backgroundColor = 'mediumseagreen';
  } else if (challenges[i].classList.contains('ongoing')) {
    challenges[i].style.backgroundColor = 'gold';
  } else {
    challenges[i].style.backgroundColor = 'indianred';
  }
}
