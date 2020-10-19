/* eslint-disable no-unused-vars */

function getValue(object, key) {
  var value;
  for (var property in object) {
    value = object[key];
  }
  return value;
}
