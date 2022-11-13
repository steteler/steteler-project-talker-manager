const express = require('express');
const talkerRoute = require('./routes/talkerRoute');

const app = express();

app.use(express.json());
app.use('/talker', talkerRoute);

const HTTP_OK_STATUS = 200;
const HTTP_CLIENT_ERROR_STATUS = 404;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_req, res) => {
  res.status(HTTP_OK_STATUS).send();
});

module.exports = {
  app,
  PORT,
  HTTP_OK_STATUS,
  HTTP_CLIENT_ERROR_STATUS,
};
