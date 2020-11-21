/* eslint-disable no-unused-vars */
function capitalizeWord(word) {
  var newWord = word.toLowerCase();
  if (newWord === 'javascript') {
    return 'JavaScript';
  } else {
    return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
  }
}
