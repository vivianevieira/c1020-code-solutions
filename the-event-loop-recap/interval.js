/* eslint-disable no-console */
let count = 3;

const logCount = setInterval(
  () => {
    if (count > 0) {
      console.log(count);
      count--;
    } else if (count === 0) {
      console.log('Blast off!');
      clearInterval(logCount);
    }
  }, 1000);
