/* eslint-disable no-unused-vars */

function setValue(object, key, value) {
  for (var property in object) {
    object[key] = value;
  }
}
