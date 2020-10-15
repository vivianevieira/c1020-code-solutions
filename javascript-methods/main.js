var x = 2;

var y = 4;

var z = 6;

var maximumValue = Math.max(x, y, z);

console.log('maximumValue: ', maximumValue);

var heroes = ['Wolverine', 'Cyclops', 'Iceman', 'Magneto'];

var randomNumber = Math.random();

randomNumber = randomNumber * heroes.length;

var randomIndex = Math.floor(randomNumber);

console.log('randomIndex: ', randomIndex);

var randomHero = heroes[randomIndex];

console.log('randomHero: ', randomHero);

var library = [
  {
    title: 'The Little Prince',
    author: 'Antoine de Saint-Exupéry'
  },
  {
    title: 'Moby-dick',
    author: 'Herman Melville'
  },
  {
    title: 'Adventures of Huckleberry Finn',
    author: 'Mark Twain'
  }
];

var lastBook = library.pop();

console.log('lastBook: ', lastBook);

var firstBook = library.shift();

console.log('firstBook: ', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);

library.unshift(css);

library.splice(1, 1);

console.log('library: ', library);

var fullName = 'Viviane Vieira';

var firstAndLastName = fullName.split(' ');

console.log('firstAndLastName: ', firstAndLastName);

var firstName = firstAndLastName[0];

var sayMyName = firstName.toUpperCase();

console.log('sayMyName: ', sayMyName);
