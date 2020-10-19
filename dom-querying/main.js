console.log('hello, world');

var header1 = document.querySelector('h1');

console.log('heading: ', header1);

console.dir(header1);

var idExplanation = document.querySelector('#explanation');

console.log('p#explanation: ', idExplanation);

console.dir(idExplanation);

var classHint = document.querySelector('.hint');

console.log('#hint: ', classHint);

console.dir(classHint);

console.log('paragraphs: ', document.querySelectorAll('p'));

console.log('.exaample-link: ', document.querySelectorAll('.example-link'));
