/* eslint-disable no-unused-vars */
function defaults(target, source) {
  var array = [];
  for (var prop in target) {
    array.push(prop);
  }
  for (var key in source) {
    if (!array.includes(key)) {
      target[key] = source[key];
    }
  }

}
