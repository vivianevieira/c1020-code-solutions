const $characters = document.querySelectorAll('span');

let index = 0;

document.addEventListener('keydown', e => {
  console.log(`Key ${e.key} pressed`);
  if (e.key === $characters[index].textContent) {
    $characters[index].className = 'correct-key';
    $characters[index + 1].className = 'next-key';
    index++;
  }

});
