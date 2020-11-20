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
  for (var i = 0; i < $images.length; i++) {
    $images[i].className = 'images hidden';
    $circles[i].className = 'far fa-circle circles';
    if (i === index) {
      $images[i].className = 'images';
      $circles[i].className = 'fas fa-circle circles';
    }
  }
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
  index = circlesView;
  update(index);
});

// function updateCarousel() {
//   for (var i = 0; i < $images.length; i++) {
//     $images[i].className = 'images hidden';
//     $circles[i].className = 'far fa-circle circles';
//     if (i === index) {
//       $images[i].className = 'images';
//       $circles[i].className = 'fas fa-circle circles';
//     }
//   }
//   index++;
//   if (index === $images.length) {
//     index = 0;
//   }
// }

// var carousel;

// function callCarousel() {
//   carousel = setInterval(updateCarousel, 3000);
// }
// callCarousel();

// var $circlesCont = document.querySelector('#circles-cont');

// $circlesCont.addEventListener('click', function () {
//   clearInterval(carousel);
//   var circlesView = event.target.getAttribute('data-view');
//   for (var i = 0; i < $images.length; i++) {
//     var imagesView = $images[i].getAttribute('data-view');
//     $images[i].className = 'images hidden';
//     $circles[i].className = 'far fa-circle circles';
//     if (circlesView === imagesView) {
//       $images[i].className = 'images';
//       $circles[i].className = 'fas fa-circle circles';
//       index = i;
//     }
//   }
//   callCarousel();
// });

// var $chevronLeft = document.querySelector('#chevron-left');

// $chevronLeft.addEventListener('click', function () {
//   clearInterval(carousel);
//   var indexChevron = index - 1;
//   for (var i = 0; i < $images.length; i++) {
//     $images[i].className = 'images hidden';
//     $circles[i].className = 'far fa-circle circles';
//     if (i === indexChevron) {
//       $images[i].className = 'images';
//       $circles[i].className = 'fas fa-circle circles';
//       index = i;
//     }
//     if (indexChevron === -1) {
//       $images[$images.length - 1].className = 'images';
//       $circles[$images.length - 1].className = 'fas fa-circle circles';
//       index = $images.length - 1;
//     }
//   }
//   callCarousel();
// });

// var $chevronRight = document.querySelector('#chevron-right');

// $chevronRight.addEventListener('click', function () {
//   clearInterval(carousel);
//   var indexChevron = index + 1;
//   for (var i = 0; i < $images.length; i++) {
//     $images[i].className = 'images hidden';
//     $circles[i].className = 'far fa-circle circles';
//     if (i === indexChevron) {
//       $images[i].className = 'images';
//       $circles[i].className = 'fas fa-circle circles';
//       index++;
//     }
//     if (indexChevron === $images.length) {
//       $images[0].className = 'images';
//       $circles[0].className = 'fas fa-circle circles';
//       index = 0;
//     }
//   }
//   callCarousel();
// });
