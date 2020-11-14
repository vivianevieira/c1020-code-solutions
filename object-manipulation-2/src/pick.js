/* eslint-disable no-unused-vars */

function pick(source, keys) {
  var newObj = {};
  for (var property in source) {
    if (source[property] !== undefined) {
      for (var i = 0; i < keys.length; i++) {
        if (keys.includes(property)) {
          newObj[property] = source[property];
        }
      }
    }
  } return newObj;
}
