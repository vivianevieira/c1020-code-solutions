/* eslint-disable no-unused-vars */

function compact(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (Boolean(array[i]) !== false) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
