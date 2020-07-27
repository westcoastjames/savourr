const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Express 11212')
});

app.listen(process.env.PORT || 3000);