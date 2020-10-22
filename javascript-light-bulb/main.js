var isOn = false;

var $container = document.querySelector('.circle');
var $background = document.querySelector('body');

function lightSwitch() {
  isOn = !isOn;
  if (isOn) {
    $container.className = 'circle on';
    $background.className = 'bg-on';
  } else {
    $container.className = 'circle off';
    $background.className = 'bg-off';
  }
}

$container.addEventListener('click', lightSwitch);
