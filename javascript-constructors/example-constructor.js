function ExampleConstructor() {
}
console.log('ExampleConstructor prototype', ExampleConstructor.prototype);
console.log('typeof ExampleConstructor prototype', typeof ExampleConstructor.prototype);

var newExampleConstructor = new ExampleConstructor();
console.log('var newExampleConstructor:', newExampleConstructor);

var isInstanceof = newExampleConstructor instanceof ExampleConstructor;
console.log('isInstanceof:', isInstanceof);
