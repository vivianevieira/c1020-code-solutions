/* eslint-disable no-unused-vars */
function numVowels(string) {
  var vowels = 'aeiouAEIOU';
  var count = 0;
  for (var i = 0; i < string.length; i++) {
    if (vowels.indexOf(string[i]) !== -1) {
      count += 1;
    }
  }
  return count;
}
