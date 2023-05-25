/*
const dog = {};
console.log(dog);
dog.name = 'Spike';
dog.legs = 4;
dog.color = 'black';
dog.age = 5;
dog.bark = function () {
  return 'woof woof';
};

console.log(dog);

const dogValues = Object.values(dog);
console.log(dogValues);

dog.breed = 'pitbull';
dog.getDogInfo = function () {
  return `Name: ${this.name}
Legs number: ${this.legs}
Color: ${this.color}
Age: ${this.age}
Breed: ${this.breed}`;
};

console.log(dog.getDogInfo());


const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: 'asab@asab.com',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'Redux',
      'MongoDB',
      'Express',
      'React',
      'Node',
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: 'paul@paul.com',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'MongoDB',
      'Express',
      'React',
      'Node',
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

function moreSkills(object) {
  const keys = Object.keys(object);
  let index = 0;
  let user;
  for (const key of keys) {
    if (index < object[key].skills.length) index = object[key].skills.length;
  }
  for (const key of keys) {
    if (index === object[key].skills.length) user = key;
  }
  return user;
}

console.log(moreSkills(users));

function loggedInUsers(object) {
  let logged = '';
  let pointsAbove50 = '';
  const keys = Object.keys(object);
  for (const key of keys) {
    if (object[key].isLoggedIn === true) {
      logged += ' ' + key;
    }
    if (object[key].points >= 50) {
      pointsAbove50 += ' ' + key;
    }
  }
  const values = `
  Logged in: ${logged.trim()}
  Users with points above 50: ${pointsAbove50.trim()}`;
  return values;
}

console.log(loggedInUsers(users));

function mernUsers(object) {
  for (let key in object) {
    const user = object[key].skills;
    if (
      user.includes('MongoDB') &&
      user.includes('Express') &&
      user.includes('React') &&
      user.includes('Node')
    ) {
      console.log(key);
    }
  }
}

console.log(mernUsers(users));

const usersCopy = Object.assign({}, users);

usersCopy.Nicolae = {
  email: 'nicolae@nicolae.com',
  skills: ['HTML', 'CSS', 'JavaScript'],
  age: 27,
  isLoggedIn: true,
  points: 65,
};

console.log(usersCopy);

const usersKeys = Object.keys(users);
console.log(usersKeys);

const usersValues = Object.values(users);
console.log(usersValues);

*/

const personAccount = {
  firstName: 'Nicolae',
  lastName: 'Cojocaru',
  incomes: 1000,
  expenses: 750,
  totalIncome() {
    this.incomes;
  },
  totalExpense() {
    this.expenses;
  },
  accountInfo() {
    return `Name: ${this.firstName} ${this.lastName}\nIncome: ${this.incomes}, Expenses: ${this.expenses} `;
  },
  addIncome(value) {
    this.incomes += value;
  },
  addExpense(value) {
    this.expenses += value;
  },
  accountBalance() {
    const balance = this.incomes - this.expenses;
    return balance;
  },
};

const users = [
  {
    _id: 'ab12ex',
    username: 'Alex',
    email: 'alex@alex.com',
    password: '123123',
    createdAt: '08/01/2020 9:00 AM',
    isLoggedIn: false,
  },
  {
    _id: 'fg12cy',
    username: 'Asab',
    email: 'asab@asab.com',
    password: '123456',
    createdAt: '08/01/2020 9:30 AM',
    isLoggedIn: true,
  },
  {
    _id: 'zwf8md',
    username: 'Brook',
    email: 'brook@brook.com',
    password: '123111',
    createdAt: '08/01/2020 9:45 AM',
    isLoggedIn: true,
  },
  {
    _id: 'eefamr',
    username: 'Martha',
    email: 'martha@martha.com',
    password: '123222',
    createdAt: '08/01/2020 9:50 AM',
    isLoggedIn: false,
  },
  {
    _id: 'ghderc',
    username: 'Thomas',
    email: 'thomas@thomas.com',
    password: '123333',
    createdAt: '08/01/2020 10:00 AM',
    isLoggedIn: false,
  },
];

const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy'],
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy'],
  },
];

function signUp(eMail, userName, passWord) {
  let userExist = false;
  for (const user of users) {
    if (user.email === eMail) userExist = true;
  }

  if (userExist) console.log('User exist');
  else {
    // Generate random ID
    const characters = 'abcdefghiklmnopqrstuvwxyz123456789';
    let randomId = '';
    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomId += characters.charAt(randomIndex);
    }

    // Generate date
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

    // Create new user
    const newUser = {
      _id: randomId,
      username: userName,
      email: eMail,
      password: passWord,
      createdAt: created,
      isLoggedIn: false,
    };

    // Add new user to array
    users.push(newUser);
  }
}
signUp('test@test.com', 'Francesco', 'virgolini');

function signIn(eMail, passWord) {
  let userLog,
    loggedIn = false;
  for (const user of users) {
    if (user.email === eMail && user.password === passWord) {
      userLog = user;
      loggedIn = true;
    }
  }
  if (loggedIn) {
    userLog.isLoggedIn = true;
    return 'User Logged In';
  } else {
    return 'Wrong credentials';
  }
}

// console.log(signIn('test@test.com', 'virgolini'));

function rateProduct(email, item, rating) {
  let productToReview, reviewer;

  for (const product of products) {
    if (product.description.toLowerCase() === item.toLowerCase()) {
      productToReview = product;
    }
  }

  for (const user of users) {
    if (user.email === email) reviewer = user._id;
  }

  if (productToReview && reviewer) {
    let existingRating;
    for (let i = 0; i < productToReview.ratings.length; i++) {
      if (productToReview.ratings[i].userId === reviewer) {
        existingRating = productToReview.ratings[i];
      }
    }
    if (existingRating) {
      existingRating.rate = rating;
    } else {
      productToReview.ratings.push({ userId: reviewer, rate: rating });
    }
  }
}

rateProduct('test@test.com', 'Smart TV:Procaster', 5);
rateProduct('asab@asab.com', 'Smart TV:Procaster', 1);
rateProduct('brook@brook.com', 'Smart TV:Procaster', 4);

function averageRating(productToReview) {
  for (const product of products) {
    if (product.description.toLowerCase() === productToReview.toLowerCase())
      if (product.ratings.length === 0) {
        console.log('The product has no ratings');
      } else {
        let sum = 0;
        for (let i = 0; i < product.ratings.length; i++) {
          sum += product.ratings[i].rate;
        }
        return `Average rating: ${(sum / product.ratings.length).toFixed(2)}`;
      }
  }
}

console.log(averageRating('Smart TV:Procaster'));
console.log(averageRating('MacPro: System Darwin'));

// {
//   _id: 'hedfcg',
//   name: 'TV',
//   description: 'Smart TV:Procaster',
//   price: 400,
//   ratings: [{ userId: 'fg12cy', rate: 5 }],
//   likes: ['fg12cy'],
// },

function likeProduct(email, item) {
  let reviewer, likedProduct;
  for (const user of users) {
    if (user.email === email) {
      reviewer = user._id;
    }
  }

  for (const product of products) {
    if (product.description.toLowerCase() === item.toLowerCase()) {
      likedProduct = product;
    }
  }

  if (reviewer && likedProduct) {
    if (likedProduct.likes.includes(reviewer)) {
      likedProduct.likes.splice(reviewer, 1);
    } else {
      likedProduct.likes.push(reviewer);
    }
  }
}

console.log(likeProduct('asab@asab.com', 'Smart TV:Procaster'));
console.log(likeProduct('test@test.com', 'Smart TV:Procaster'));

console.log(products[2]);
