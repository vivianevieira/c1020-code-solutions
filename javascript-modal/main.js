var $openButton = document.querySelector('.open-button');
var $modal = document.querySelector('.modal');
var $redButton = document.querySelector('.red-button');

$openButton.addEventListener('click', function () {
  $modal.className = 'modal';
});

$redButton.addEventListener('click', function () {
  $modal.className = 'modal no-display';
});
