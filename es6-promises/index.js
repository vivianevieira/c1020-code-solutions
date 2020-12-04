/* eslint-disable no-unused-vars, no-console */
const takeAChance = require('./take-a-chance');

const p = takeAChance('Viviane');

p.then(value => {
  console.log(value);
}, reason => {
  console.error(reason.message);
});
