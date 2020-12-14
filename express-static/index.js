const express = require('express');
const app = express();

const path = require('path');

const join = path.join(__dirname, 'public');

const staticFiles = express.static(join);
app.use(staticFiles);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server listening on port 3000');
});
