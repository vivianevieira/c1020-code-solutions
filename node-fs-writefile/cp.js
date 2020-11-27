const fs = require('fs');

const readFile = process.argv[2];

const writeFile = process.argv[3];

function readContent(callback) {
  fs.readFile(readFile, 'utf8', (err, data) => {
    if (err) return callback(err);
    callback(null, data);
  });
}

readContent((err, data) => {
  if (err) throw err;
  fs.writeFile(writeFile, data, 'utf8', err => {
    if (err) throw err;
  });
});
