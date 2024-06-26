require('dotenv').config();
const express = require('express');
const app = express();
const serverConfig = require('./config/serverConfig');
const path = require('path');

const indexRouter = require('./routes/index.routes');

serverConfig(app);

app.use('/', indexRouter);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/index.html'));
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server started on ${PORT} port`);
});
