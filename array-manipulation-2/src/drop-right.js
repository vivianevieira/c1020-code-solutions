/* eslint-disable no-unused-vars */
function dropRight(array, count) {
  if (array.length === 0) {
    return [];
  } else {
    var number = array.length - count;
    array.length = number;
    return array;
  }
}
