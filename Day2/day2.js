/*
EX LEVEL 1

Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.

Print the string on the browser console using console.log()

Print the length of the string on the browser console using console.log()

Change all the string characters to capital letters using toUpperCase() method

Change all the string characters to lowercase letters using toLowerCase() method

Cut (slice) out the first word of the string using substr() or substring() method

Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.

Check if the string contains a word Script using includes() method

Split the string into an array using split() method

Split the string 30 Days Of JavaScript at the space using split() method

'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.

Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.

What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.

What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()

Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript

Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.

Use indexOf to find the position of the first occurrence of the word because in the following 
sentence:'You cannot end a sentence with because because because is a conjunction'

Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.

Use startsWith() method with the string 30 Days Of JavaScript and make the result true

Use endsWith() method with the string 30 Days Of JavaScript and make the result true

Use match() method to find all the a’s in 30 Days Of JavaScript

Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'

Use repeat() method to print 30 Days Of JavaScript 2 times
*/

const challenge = '30 Days of Javascript';
console.log(challenge);

console.log(challenge.length);

challenge.toUpperCase();

challenge.toLowerCase();

const ex6 = challenge.substring(0, 3);
console.log(ex6);

const ex7 = challenge.slice(3);
console.log(ex7);

console.log(challenge.includes('Script'));

const ex9 = challenge.split(' ');
console.log(ex9);

const ex10 = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(ex10.split(','));

const ex11 = challenge.replace('Javascript', 'Python');
console.log(ex11);

console.log(challenge.charAt(15));

console.log(challenge.charCodeAt(11));

const ex17 =
  'You cannot end a sentence with because because because is a conjunction';
console.log(ex17.indexOf('because'));

console.log(ex17.lastIndexOf('because'));

console.log(ex17.search('because'));

const ex20 = ' 30 Days Of JavaScript ';
console.log(ex20.trim());

console.log(challenge.startsWith('30'));

console.log(challenge.endsWith('pt'));

console.log(challenge.match(/a/gi));

const ex24a = '30 Days of';
const ex24b = 'Javascript';

console.log(ex24a.concat(' ', ex24b));

console.log(challenge.repeat(2));

/*
EX LEVEL 2
*/
console.log(
  "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
);

console.log(
  "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
);

const ex3a = '10';
const ex3b = 10;
console.log(typeof +ex3a === typeof ex3b);

console.log(Math.ceil(parseFloat(9.8)) === 10);

const python = 'python';
const jargon = 'jargon';

console.log(python.includes('on') && jargon.includes('on'));

const ex6a = 'I hope this course is not full of jargon.';
console.log(ex6a.includes('jargon'));

console.log(Math.ceil(Math.random() * 101));
console.log(Math.ceil(Math.random() * 51) + 50);
console.log(Math.ceil(Math.random() * 256));

const js = 'JavaScript';
console.log(js[Math.floor(Math.random() * js.length)]);

console.log('1 1 1 1 1 \n2 1 2 4 8 \n3 1 3 9 27 \n4 1 4 16 64 \n5 1 5 25 125');

console.log(
  ex17.substring(
    ex17.indexOf('because'),
    ex17.lastIndexOf('because') + 'because'.length
  )
);

// EX LEVEL 3

const str =
  'Love is the best thing in this world. Some found their love and some are still looking for their love.';
console.log(str.match(/love/gi).length);

console.log(ex17.match(/because/g).length);

const sentence =
  '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';

console.log(sentence.replace(/[%$@&;#]/g, ''));

const str2 =
  'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';

console.log(str2.match(/\d+/g));
