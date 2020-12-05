const express = require('express');
const app = express();

const pg = require('pg');
const db = new pg.Pool({
  connectionString: 'postgres://dev:lfz@localhost/studentGradeTable'
});

const jasonMiddleware = express.json();
app.use(jasonMiddleware);

app.get('/api/grades', (req, res) => {
  db.query('select* from "grades"')
    .then(result => {
      res.status(200).json(result.rows);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    });
});

app.post('/api/grades', (req, res) => {
  const sql = `
  insert into "grades" ("name", "course", "score")
          values ($1, $2, $3)
          returning *
  `;
  const postContent = req.body;
  const gradeScore = parseInt(postContent.score, 10);
  const values = [postContent.name, postContent.course, gradeScore];

  if (postContent.name === undefined || postContent.course === undefined || postContent.score === undefined) {
    res.status(400).json({ error: 'Invalid grade entry' }); return;
  } else if (!Number.isInteger(gradeScore) || gradeScore < 1 || gradeScore > 100) {
    res.status(400).json({ error: 'grade must be a number from 1 to 100' });
    return;
  }

  db.query(sql, values)
    .then(result => {
      res.status(201).json(result.rows[0]);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
