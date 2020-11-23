/* eslint-disable no-unused-vars */
function capitalizeWord(word) {
  var newWord = word.toLowerCase();
  if (newWord === 'javascript') {
    return 'JavaScript';
  } else {
    if (newWord === 'javascript:') {
      return 'JavaScript:';
    }
    return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
  }
}

function capHyphenated(string) {
  var index = string.indexOf('-');
  var newString1 = string.substring(0, index + 1);
  var newString2 = string.substring(index + 1);
  newString2 = capitalizeWord(newString2);
  return newString1 + newString2;
}

var lowercasedWords = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as',
  'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];

function titleCase(title) {
  var array = title.split(' ');
  var resultTitle = '';
  for (var i = 0; i < array.length; i++) {
    if (!lowercasedWords.includes(array[i])) {
      array[i] = capitalizeWord(array[i]);
    }
    if (array[i].includes(':')) {
      array[i + 1] = capitalizeWord(array[i + 1]);
    }
    if (array[i].includes('-')) {
      array[i] = capHyphenated(array[i]);
    }
    if (array[i] === 'Api') {
      array[i] = 'API';
    }
    resultTitle += array[i] + ' ';
  }
  return resultTitle.trim();
}
