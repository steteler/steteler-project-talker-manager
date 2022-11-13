const express = require('express');
const talkerRoute = require('./routes/talkerRoute');
const loginRoute = require('./routes/loginRoute');

const app = express();

const HTTP_OK_STATUS = 200;
const PORT = '3000';

app.use(express.json());
app.use('/talker', talkerRoute);
app.use('/login', loginRoute);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_req, res) => {
  res.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('servidor ligado');
});
