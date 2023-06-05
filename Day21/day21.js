// const firstPragraph = document.querySelector('p');
// console.log(firstPragraph);

const firstPragraphQuery = document.querySelector('#first-paragraph');
const firstPragraphID = document.getElementById('first-paragraph');

const secondPragraphQuery = document.querySelector('#second-paragraph');
const secondPragraphID = document.getElementById('second-paragraph');

const thirdPragraphQuery = document.querySelector('#third-paragraph');
const thirdPragraphID = document.getElementById('third-paragraph');

const forthPragraphQuery = document.querySelector('#forth-paragraph');
const forthPragraphID = document.getElementById('forth-paragraph');

const allParagraphs = document.querySelectorAll('p');
console.log(allParagraphs);

allParagraphs[allParagraphs.length - 1].textContent = 'Fourth Paragraph';

// Adding IDs and Classes qith different methods

// 1.
allParagraphs[0].className = 'HELLO';
allParagraphs[0].id = 'WORLD';
// 2.
allParagraphs[1].setAttribute('class', 'ALOHA');
allParagraphs[1].setAttribute('id', 'HONUA');
// 3.
allParagraphs[2].classList.add('classlist', 'added');
allParagraphs[2].classList.toggle('paragraph');
allParagraphs[3].classList.remove('paragraph');

allParagraphs[0].style.color = 'salmon';
allParagraphs[1].style.fontSize = '20px';
allParagraphs[2].style.fontWeight = '700';
allParagraphs[3].style.fontStyle = 'oblique';

for (let i = 0; i < allParagraphs.length; i++) {
  if (i % 2 === 0) allParagraphs[i].style.background = 'red';
  else allParagraphs[i].style.background = 'green';
}

for (let i = 0; i < allParagraphs.length; i++) {
  console.log(
    (allParagraphs[i].textContent = `
      Class Name: ${allParagraphs[i].className} Id Name: ${allParagraphs[i].id}`)
  );
}
