/* eslint-disable no-console, no-unused-vars, dot-notation */
var student = {
  firstName: 'Viviane',
  lastName: 'Vieira',
  age: 99
};

var fullName = student.firstName + student.lastName;

console.log('value of fullName: ', fullName);

student.livesInIrvine = false;

student.previousOccupation = 'Boss';

console.log('value of livesInIrvine: ', student.livesInIrvine);

console.log('value of previousOccupation: ', student.previousOccupation);

var vehicle = {
  make: 'Tesla',
  model: 'S',
  year: 2020
};

vehicle['color'] = 'silver';

vehicle['isConvertible'] = false;

console.log('value of vehicle["color"]: ', vehicle['color']);

console.log('value of isConvertible :', vehicle.isConvertible);

console.log('value of vehicle: ', vehicle);

var pet = {
  name: 'sunshine',
  type: 'cat'
};

delete pet.name;
delete pet.type;

console.log('value of pet: ', pet);
