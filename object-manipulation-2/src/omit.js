/* eslint-disable no-unused-vars */
function omit(source, keys) {
  var newObj = {};
  for (var property in source) {
    for (var i = 0; i < keys.length; i++) {
      if (!keys.includes(property)) {
        newObj[property] = source[property];
      }
    }

  } return newObj;
}
