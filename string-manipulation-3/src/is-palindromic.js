/* eslint-disable no-unused-vars */
function reverseWord(word) {
  var newWord = '';
  for (var i = word.length - 1; i >= 0; i--) {
    newWord += word[i];
  }
  return newWord;
}

function isPalindromic(string) {
  var array = string.split(' ');
  var newString = array.join('');
  var reverse = reverseWord(newString);
  return (newString === reverse);
}
