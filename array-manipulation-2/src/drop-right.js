/* eslint-disable no-unused-vars */
function dropRight(array, count) {
  var newArray = [];
  if (array.length === 0) {
    newArray = [];
  } else {
    for (var i = 0; i < array.length - count; i++) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
