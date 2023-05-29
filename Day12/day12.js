const str =
  'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month';
const reg = /\d+/g;

const test = function (stringTest, regEx) {
  return stringTest.match(regEx).reduce((a, b) => +a + +b, 0);
};

console.log(test(str, reg));

const points = [-12, -4, -3, -1, 0, 4, 8];
const sortedPoints = points.sort((a, b) => a - b);
const distance = Math.abs(
  sortedPoints[sortedPoints.length - 1] - sortedPoints[0]
);
console.log(distance);

const testVariable = function (testVar) {
  const isValidVariable = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;
  return isValidVariable.test(testVar);
};

console.log(testVariable('sdcsa'));

const testStr =
  'I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.';

console.log(testStr.replace(/\./gi, ''));

const wordsNumberUsed = function (str, top) {
  const result = {};
  const splitStr = str.replace(/\./g, '').split(' ');
  splitStr.forEach(item => {
    if (result[item]) {
      result[item]++;
    } else {
      result[item] = 1;
    }
  });

  const resultArr = [];
  for (let word in result) {
    resultArr.push({ word: word, count: result[word] });
  }
  return resultArr.sort((a, b) => b.count - a.count).slice(0, top);
};

console.log(wordsNumberUsed(testStr, 10));

sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;

const wordCounter = function (str, top) {
  const formatedStr = str.replace(/[^\w\s]/g, '').split(' ');
  console.log(formatedStr);
  const result = {};
  formatedStr.forEach(word => {
    if (result[word]) {
      result[word]++;
    } else {
      result[word] = 1;
    }
  });

  const resultArr = [];
  for (let word in result) {
    resultArr.push({ word: word, count: result[word] });
  }

  return resultArr.sort((a, b) => b.count - a.count).slice(0, top);
};

console.log(wordCounter(sentence, 5));
