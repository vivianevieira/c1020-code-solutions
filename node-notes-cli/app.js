const dataJson = require('./data.json');

const fs = require('fs');

if (process.argv[2] === 'read') {
  for (const key in dataJson.notes) {
    console.log(`${key}: ${dataJson.notes[key]}`);
  }
}

if (process.argv[2] === 'create') {
  dataJson.notes[dataJson.nextId] = process.argv[3];
  dataJson.nextId = parseInt(Object.keys(dataJson.notes)[Object.keys(dataJson.notes).length - 1]) + 1;
  fs.writeFile('./data.json', JSON.stringify(dataJson, null, 2), err => {
    if (err) throw err;
  });
}

if (process.argv[2] === 'update') {
  dataJson.notes[parseInt(process.argv[3])] = process.argv[4];
  fs.writeFile('./data.json', JSON.stringify(dataJson, null, 2), err => {
    if (err) throw err;
  });
}

if (process.argv[2] === 'delete') {
  delete dataJson.notes[parseInt(process.argv[3])];
  dataJson.nextId = parseInt(Object.keys(dataJson.notes)[Object.keys(dataJson.notes).length - 1]) + 1;
  fs.writeFile('./data.json', JSON.stringify(dataJson, null, 2), err => {
    if (err) throw err;
  });
}
