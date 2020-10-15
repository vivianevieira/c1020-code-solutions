function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}

var convertMinutesToSecondsResult = convertMinutesToSeconds(5);

console.log('convert 5 minutes to seconds: ', convertMinutesToSecondsResult);

function greet(name) {
  var greeting = 'Hey, ' + name;
  return greeting;
}

var greetResult = greet('Viviane');

console.log('greetResult: ', greetResult);

function getArea(width, height) {
  return width * height;
}

var getAreaResult = getArea(17, 42);

console.log('getAreaResult: ', getAreaResult);

function getFirstName(person) {
  var firstName = person.firstName;
  return firstName;
}

var getFirstNameResult = getFirstName({ firstName: 'Viviane', lastName: 'Vieira' });

console.log('getFirstnameResult: ', getFirstNameResult);

function getLastElement(array) {
  var lastIndex = array.length - 1;
  var lastElement = array[lastIndex];
  return lastElement;
}

var getLastItemResult = getLastElement(['propane', 'and', 'propane', 'accessories']);

console.log('getLastItemResult: ', getLastItemResult);
