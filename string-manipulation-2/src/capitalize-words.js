/* eslint-disable no-unused-vars */
function capitalizeWords(string) {
  var array = string.split(' ');
  var newString = '';
  for (var i = 0; i < array.length; i++) {
    newString += array[i].charAt(0).toUpperCase() + array[i].substring(1).toLowerCase() + ' ';
  }
  var result = newString.trim();
  return result;
}
