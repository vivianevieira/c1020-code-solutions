/* eslint-disable no-unused-vars */
function chunk(array, size) {
  var result = [];
  for (var i = 0; i < array.length; i += size) {
    var subArray = array.slice(i, i + size);
    result.push(subArray);
  }
  return result;
}
