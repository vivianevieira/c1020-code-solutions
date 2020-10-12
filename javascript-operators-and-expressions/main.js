/* eslint-disable no-console */

var width = 3;
var height = 1.5;
var area = width * height;

console.log('Value area:', area);
console.log('typeof area:', typeof area);

var bill = 900;
var payment = 1800;

var change = payment - bill;
console.log('value of change:', change);
console.log('typeof change:', typeof change);

var quizzes = 100;
var midterm = 50;
var final = 90;
var grade = ((quizzes + midterm + final) / 3);

console.log('value of grade:', grade);
console.log('type of grade:', typeof grade);

var firstName = 'Joseph';
var lastName = 'Campbell';
var fullName = firstName + ' ' + lastName;

console.log('value of fullName:', fullName);
console.log('typeof fullName:', typeof fullName);

var pH = 7;
var isAcidic = pH < 7;

console.log('value of isAcidic:', isAcidic);
console.log('type of isAcidic:', typeof isAcidic);

var headCount = 5;
var isSparta = headCount === 300;

console.log('value of isSpart:', isSparta);
console.log('type of isSparta:', typeof isSparta);

var motto = fullName;
motto += ' is the GOAT';

console.log('value of motto:', motto);
console.log('type of motto:', typeof motto);
