/* exported yakko, wakko, dot */

var yakko = {
  age: 14,
  name: 'Yakko',
  role: 'brother'
  // describe: function () {
  //   var description = this.name + ' is a ' +
  //                     this.age + '-year-old Warner ' + this.role + '.';
  //   return description;
  // }
};

var wakko = {
  age: 11,
  name: 'Wakko',
  role: 'brother'
  // describe: function () {
  //   var description = this.name + ' is a ' +
  //                     this.age + '-year-old Warner ' + this.role + '.';
  //   return description;
  // }
};

var dot = {
  age: 10,
  name: 'Dot',
  role: 'sister'
  // describe: function () {
  //   var description = this.name + ' is a ' +
  //                     this.age + '-year-old Warner ' + this.role + '.';
  //   return description;
  // }
};

var warnerPrototype = {
  describe: function () {
    var description = this.name + ' is a ' +
      this.age + '-year-old Warner ' + this.role + '.';
    return description;
  }
};

Object.setPrototypeOf(yakko, warnerPrototype);
Object.setPrototypeOf(wakko, warnerPrototype);
Object.setPrototypeOf(dot, warnerPrototype);
