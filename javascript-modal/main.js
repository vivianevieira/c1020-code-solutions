var modalOn = false;

var $openButton = document.querySelector('.open-button');
var $modal = document.querySelector('.modal');
var $redButton = document.querySelector('.red-button');

$openButton.addEventListener('click', function () {
  modalOn = !modalOn;
  if (modalOn) {
    $modal.className = 'modal';
  }
});

$redButton.addEventListener('click', function () {
  modalOn = !modalOn;
  if (modalOn === false) {
    $modal.className = 'modal no-display';
  }
});
