/* eslint-disable no-unused-vars */

function isAnagram(firstString, secondString) {
  if (firstString.includes(' ')) {
    var firstStringArray = firstString.split(' ');
    firstString = firstStringArray.join('');
  }
  if (secondString.includes(' ')) {
    var secondStringArray = secondString.split(' ');
    secondString = secondStringArray.join('');
  }
  if (firstString.length === secondString.length) {
    var array1 = firstString.split('');
    var array2 = secondString.split('');
    for (var i = 0; i < array2.length; i++) {
      if (array1.includes(array2[i])) {
        var indexRemove = array1.indexOf(array2[i]);
        array1.splice(indexRemove, 1);
      }
    }
    if (array1.length === 0) {
      return true;
    }
  }
  return false;

}
