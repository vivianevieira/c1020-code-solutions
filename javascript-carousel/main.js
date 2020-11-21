var index = 0;
var $circles = document.querySelectorAll('.circles');
var $images = document.querySelectorAll('.images');

function previous(index) {
  var previousIndex;
  previousIndex = index - 1;
  if (index === 0) {
    previousIndex = $images.length - 1;
  }
  return previousIndex;
}

function next(index) {
  var nextIndex;
  nextIndex = index + 1;
  if (index === $images.length - 1) {
    nextIndex = 0;
  }
  return nextIndex;
}

function update(index) {
  clearTimeout(timerId);
  for (var i = 0; i < $images.length; i++) {
    $images[i].className = 'images hidden';
    $circles[i].className = 'far fa-circle circles';
    if (i === index) {
      $images[i].className = 'images';
      $circles[i].className = 'fas fa-circle circles';
    }
  }
  autoPlay();
}

var $chevronLeft = document.querySelector('#chevron-left');

$chevronLeft.addEventListener('click', function () {
  index = previous(index);
  update(index);
});

var $chevronRight = document.querySelector('#chevron-right');
$chevronRight.addEventListener('click', function () {
  index = next(index);
  update(index);
});

var $circlesCont = document.querySelector('#circles-cont');

$circlesCont.addEventListener('click', function () {
  var circlesView = event.target.getAttribute('data-view');
  circlesView = parseInt(circlesView);
  index = circlesView;
  update(index);
});

var timerId;

function autoPlay() {
  timerId = setTimeout(function () {
    index = next(index);
    update(index);
  }, 3000);
}

autoPlay();
