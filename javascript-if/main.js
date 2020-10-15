/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */

function isUnderFive(number) {
  var result = number < 5;
  return result;
}

function isEven(number) {
  var result = number % 2 === 0;
  return result;
}

function startsWithJ(string) {
  var result = string[0] === 'J';
  return result;
}

function isOldEnoughToDrink(person) {
  var result = person.age >= 21;
  return result;
}

function isOldEnoughToDrive(person) {
  var result = person.age >= 16;
  return result;
}

function isOldEnoughToDrinkAndDrive(person) {
  return false;
}

function categorizeAcidity(pH) {
  var result;
  if (pH === 7) {
    result = 'neutral';
  } else
  if (pH >= 0 && pH < 7) {
    result = 'acid';
  } else
  if (pH > 7 && pH <= 14) {
    result = 'base';
  } else {
    result = 'invalid pH level';
  }
  return result;
}

function introduceWarnerBro(name) {
  var result;
  if (name === 'yakko') {
    result = 'We\'re the warner brothers!';
  } else
  if (name === 'wakko') {
    result = 'We\'re the warner brothers!';
  } else
  if (name === 'dot') {
    result = 'I\'m cute~';
  } else {
    result = 'Goodnight everybody!';
  }
  return result;
}
