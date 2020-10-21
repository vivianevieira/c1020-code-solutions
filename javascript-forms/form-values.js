var form = document.querySelector('form');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  var formData = {};
  formData.name = form.elements.name.value;
  formData.email = form.elements.email.value;
  formData.message = form.elements.message.value;
  console.log('Form data: ', formData);
  form.reset();
});

// var nameValue = form.elements.name.value;
// var emailValue = form.elements.email.value;
// var message = form.elements.message.value;

// var formData = {};
// formData.name = nameValue;
// formData.email = emailValue;
// formData.message = message;

// console.log(formData);
