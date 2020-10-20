var container = document.querySelector('.circle');
var background = document.querySelector('body');

function lightSwitch() {
  var light;
  if (container.className === 'circle on') {
    light = 'off';
  } else if (container.className === 'circle off') {
    light = 'on';
  }
  container.className = 'circle ' + light;
  background.className = 'bg-' + light;
}

container.addEventListener('click', lightSwitch);
