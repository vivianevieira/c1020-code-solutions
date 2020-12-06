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
  const bodyContent = req.body;
  const gradeScore = parseInt(bodyContent.score, 10);

  if (bodyContent.name === undefined) {
    res.status(400).json({ error: 'name is required' });
    return;
  }
  if (bodyContent.course === undefined) {
    res.status(400).json({ error: 'course is required' });
    return;
  }
  if (bodyContent.score === undefined) {
    res.status(400).json({ error: 'score is required' });
    return;
  }
  if (!Number.isInteger(gradeScore) || gradeScore < 1 || gradeScore > 100) {
    res.status(400).json({ error: 'grade must be a number from 1 to 100' });
    return;
  }

  const sql = `
  insert into "grades" ("name", "course", "score")
          values ($1, $2, $3)
          returning *
  `;

  const values = [bodyContent.name, bodyContent.course, gradeScore];

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

  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({ error: 'gradeId must be a positive integer' });
    return;
  }
  if (bodyContent.name === undefined) {
    res.status(400).json({ error: 'name is required' });
    return;
  }
  if (bodyContent.course === undefined) {
    res.status(400).json({ error: 'course is required' });
    return;
  }
  if (bodyContent.score === undefined) {
    res.status(400).json({ error: 'score is required' });
    return;
  }
  if (!Number.isInteger(gradeScore) || gradeScore < 1 || gradeScore > 100) {
    res.status(400).json({ error: 'score must be a number from 1 to 100' });
    return;
  }

  const sql = `
  update "grades"
     set "name" = $1,
        "course" = $2,
        "score" = $3
  where "gradeId" = $4
  returning *
  `;

  const values = [bodyContent.name, bodyContent.course, gradeScore, gradeId];

  db.query(sql, values)
    .then(result => {
      const grade = result.rows[0];
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

app.delete('/api/grades/:gradeId', (req, res) => {
  const gradeId = parseInt(req.params.gradeId, 10);

  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: 'gradeId must be a positive integer'
    });
    return;
  }

  const sql = `
  delete from "grades"
  where "gradeId" = $1
  returning *
  `;

  const values = [gradeId];

  db.query(sql, values)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({ error: `Cannot find grade with gradeId ${gradeId}` });
      } else {
        res.sendStatus(204);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    });

});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server is running on port 3000');
});
