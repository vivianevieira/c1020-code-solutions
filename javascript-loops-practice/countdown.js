/* exported countdown */
function countdown(number) {
  var numbers = [];
  var currentNumber = number;
  while (currentNumber >= 0) {
    numbers.push(currentNumber);
    currentNumber -= 1;
  }
  return numbers;
}
