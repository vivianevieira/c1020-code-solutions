/* exported includesSeven */

function includesSeven(array) {
  var result;
  for (var i = 0; i < array.length; i++) {
    result = (array[i] === 7);
  }
  return result;
}
