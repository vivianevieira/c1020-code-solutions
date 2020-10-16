/* exported getStudentNames */

function getStudentNames(students) {
  var array = [];
  for (var i = 0; i < students.length; i++) {
    array.push(students[i].name);
  }
  return array;
}
