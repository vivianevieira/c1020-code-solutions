var books = [
  {
    isbn: '9780553213119',
    title: 'Moby Dick',
    author: 'Herman Melville'
  },
  {
    isbn: '0156012197',
    title: 'The Little Prince',
    author: 'Antoine de Saint-Exupery'
  },
  {
    isbn: '8172345194',
    title: 'The Diary of a Young Girl',
    author: 'Anne Frank'
  }
];

console.log('Books array: ', books);
console.log('typeof books ', typeof books);

console.log('JSON of books: ', JSON.stringify(books));
console.log('typeof JSON of books: ', typeof JSON.stringify(books));

var student = '{ "number": 22, "name": "Josehp Campbell" }';
console.log('student JSON string: ', student);
console.log('type of student: ', typeof student);

var studentObj = JSON.parse(student);
console.log('student javascript obj: ', studentObj);
console.log('type of student obj: ', typeof studentObj);
