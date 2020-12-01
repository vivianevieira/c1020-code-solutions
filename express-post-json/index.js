const express = require('express');

const app = express();

const grades = [];

let nextId = 1;

const jsonExpress = express.json();

app.get('/api/grades', (req, res) => {
  res.json(grades);
});

app.use(jsonExpress);

app.post('/api/grades', (req, res) => {
  const newGrade = req.body;
  newGrade.id = nextId;
  nextId++;
  grades.push(newGrade);
  res.status(201);
  res.json(newGrade);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server listening on port 3000');
});
