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

app.put('/api/grades/:gradeId', (req, res) => {
  const gradeId = parseInt(req.params.gradeId, 10);
  const bodyContent = req.body;
  const gradeScore = parseInt(bodyContent.score, 10);
  const values = [bodyContent.name, bodyContent.course, gradeScore, gradeId];

  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: 'gradeId must be a positive integer'
    });
    return;
  }
  if (bodyContent.name === undefined || bodyContent.course === undefined || bodyContent.score === undefined) {
    res.status(400).json({
      error: 'invalid grade entry'
    });
    return;
  }
  if (!Number.isInteger(gradeScore) || gradeScore < 1 || gradeScore > 100) {
    res.status(400).json({ error: 'grade must be a number from 1 to 100' });
    return;
  }

  const sql = `
  update "grades"
     set "name" = $1,
        "course" = $2,
        "score" = $3
  where "gradeId" = $4
  `;

  db.query(sql, values)
    .then(result => {
      const grade = result.rows;
      if (!grade) {
        res.status(404).json({ error: `Cannot find grade with gradeId ${gradeId}` });
      } else {
        res.status(200).json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
