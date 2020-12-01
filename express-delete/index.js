const express = require('express');

const grades = [
  {
    id: 1,
    name: 'Beeg Yoshi',
    course: 'Data Structure',
    grade: 9001
  },
  {
    id: 2,
    name: 'Lee Johnson',
    course: 'Lambda',
    grade: 1200
  }
];

const app = express();

app.get('/api/grades', (req, res) => {
  res.json(grades);
});

app.delete('/api/grades/:id', (req, res) => {
  const obj = parseInt(req.params.id);
  for (let i = 0; i < grades.length; i++) {
    if (grades[i].id === obj) {
      grades.splice(i, 1);
    }
  }
  res.sendStatus(204);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server listening on port 3000');
});
