/* eslint-disable no-unused-vars */
function take(array, count) {
  if (array.length > 0) {
    array.length = count;
  } else {
    array = [];
  }
  return array;
}
