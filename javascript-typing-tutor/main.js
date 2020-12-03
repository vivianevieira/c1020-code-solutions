const $characters = document.querySelectorAll('span');

let index = 0;

document.addEventListener('keydown', e => {
  if (index <= 24 && e.key === $characters[index].textContent) {
    $characters[index].className = 'correct-key';
    $characters[index + 1].className = 'next-key';
    index++;
  } else if (index <= 25 && e.key !== $characters[index].textContent) {
    $characters[index].className = 'incorrect-key';
  } else if (index === 25 && e.key === $characters[index].textContent) {
    $characters[index].className = 'correct-key';
    index++;
  }

});
