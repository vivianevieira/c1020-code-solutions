/* exported student */
var student = {
  firstName: 'Viviane',
  lastName: 'Vieira',
  subject: 'Javascript',
  getFullName: function () {
    return this.firstName + ' ' + this.lastName;
  },
  getIntroduction: function () {
    return 'Hello, my name is ' + this.firstName + ' ' + this.lastName + ' and I am studying ' + this.subject + '.';
  }
};
