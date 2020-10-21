function handleFocus(event) {
  console.log('focus event fired');
  console.log('event.target.name', event.target.name);
}

function handleBlur(event) {
  console.log('blur event fired');
  console.log('event.target.name', event.target.name);
}

function handleInput(event) {
  console.log(event.target.name);
  console.log(event.target.value);
}

var inputName = document.querySelector('input[name="name"]');
var inputEmail = document.querySelector('input[name="email"]');
var textArea = document.querySelector('textarea');

inputName.addEventListener('focus', handleFocus);
inputName.addEventListener('blur', handleBlur);
inputName.addEventListener('input', handleInput);

inputEmail.addEventListener('focus', handleFocus);
inputEmail.addEventListener('blur', handleBlur);
inputEmail.addEventListener('input', handleInput);

textArea.addEventListener('focus', handleFocus);
textArea.addEventListener('blur', handleBlur);
textArea.addEventListener('input', handleInput);
