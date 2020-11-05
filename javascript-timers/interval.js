var h1 = document.querySelector('h1');

function countdown() {
  var newH1 = h1.textContent - 1;
  h1.textContent = newH1;
  if (h1.textContent === '0') {
    h1.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(interval);
  }
}

var interval = setInterval(countdown, 1000);
