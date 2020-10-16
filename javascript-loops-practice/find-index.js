/* exported findIndex */

function findIndex(array, value) {
  var result;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      result = i;
      break;
    } else {
      result = -1;
    }
  }
  return result;
}
