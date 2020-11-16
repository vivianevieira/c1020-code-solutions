/* eslint-disable no-unused-vars */
function take(array, count) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    newArray.push(array[i]);
  }
  if (array.length === 0) {
    newArray = [];
  } else {
    newArray.length = count;
  }

  return newArray;
}
