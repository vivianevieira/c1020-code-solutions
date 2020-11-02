/* exported calculator */
var calculator = {
  add: function (x, y) {
    return x + y;
  },
  subtract: function (x, y) {
    return x - y;
  },
  multiply: function (x, y) {
    return x * y;
  },
  divide: function (x, y) {
    return x / y;
  },
  sumAll: function (numbers) {
    return numbers.reduce((a, b) => a + b, 0);
  },
  getAverage: function (numbers) {
    var arrAvg = arr => arr.reduce((a, b) => a + b, 0) / arr.length;
    return arrAvg(numbers);
  },
  square: function (x) {
    return x * x;
  }
};
