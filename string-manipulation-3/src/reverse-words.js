/* eslint-disable no-unused-vars */
function reverseWord(word) {
  var newWord = '';
  for (var i = word.length - 1; i >= 0; i--) {
    newWord += word[i];
  }
  return newWord;
}

function reverseWords(string) {
  var array = string.split(' ');
  var newString = '';
  for (var i = 0; i < array.length; i++) {
    newString += reverseWord(array[i]) + ' ';
  }
  return newString.trim();
}
