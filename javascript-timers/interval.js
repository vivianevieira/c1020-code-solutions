var h1 = document.querySelector('h1');
var count = 4;

function countdown() {
  count--;
  h1.textContent = count;
  if (count <= '0') {
    h1.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(interval);
  }
}

var interval = setInterval(countdown, 1000);
