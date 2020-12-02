const data = require('./data.json');
const fs = require('fs');

const express = require('express');
const app = express();

const jasonMiddleware = express.json();

app.use(jasonMiddleware);

let notesArray = [];

function getNotes() {
  for (const notesKey in data.notes) {
    notesArray.push(data.notes[notesKey]);
  }
}

app.get('/api/notes', (req, res, next) => {
  notesArray = [];
  getNotes();
  res.status(200).json(notesArray);
});

app.get('/api/notes/:id', (req, res, next) => {
  const id = parseInt(req.params.id);
  if (id < 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (data.notes[id] === undefined) {
    res.status(404).json({ error: `cannot find note with id ${id}` });
  } else {
    res.status(200).json(data.notes[id]);
  }
});

app.post('/api/notes', (req, res, next) => {
  const noteContent = req.body;
  if (noteContent.content === undefined) {
    res.status(400).json({ error: 'content is a required field' });
  } else {
    const noteId = data.nextId;
    const newNote = noteContent;
    data.nextId++;
    data.notes[noteId] = newNote;
    data.notes[noteId].id = noteId;
    const json = JSON.stringify(data, null, 2);
    fs.writeFile('./data.json', json, err => {
      if (err) {
        res.status(500).json({ error: 'An unexpected error occurred.' });
        console.error(err);
      } else {
        notesArray.push(data.notes[noteId]);
        res.status(201).json({ content: `${noteContent.content}`, id: `${noteId}` });
      }
    });
  }
});

app.delete('/api/notes/:id', (req, res, next) => {
  const id = parseInt(req.params.id, 10);
  if (id < 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (data.notes[id] === undefined) {
    res.status(404).json({ error: `cannot find note with id ${id}` });
  } else {
    delete data.notes[id];
    const json = JSON.stringify(data, null, 2);
    fs.writeFile('./data.json', json, err => {
      if (err) {
        res.status(500).json({ error: 'An unexpected error occurred.' });
        console.error(err);
      } else {
        res.sendStatus(204);
      }
    });
  }
});

app.put('/api/notes/:id', (req, res, next) => {
  const noteContent = req.body.content;
  const id = parseInt(req.params.id, 10);
  if (id < 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (noteContent === undefined) {
    res.status(400).json({ error: 'content is a required field' });
  } else if (data.notes[id] === undefined) {
    res.status(404).json({ error: `cannot find note with id ${id}` });
  } else {
    data.notes[id].content = noteContent;
    const json = JSON.stringify(data, null, 2);
    fs.writeFile('./data.json', json, err => {
      if (err) {
        res.status(500).json({ error: 'An unexpected error occurred.' });
        console.error(err);
      } else {
        res.status(200).json(data.notes[id]);
      }
    });
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server listening on port 3000');
});
