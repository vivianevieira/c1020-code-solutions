/* eslint-disable no-unused-vars */
function takeRight(array, count) {
  var toSlice = array.length - count;
  var newArray = array.slice(toSlice);
  return newArray;
}
