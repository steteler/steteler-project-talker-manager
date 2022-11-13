const express = require('express');
const readTalker = require('../utils/readTalker');
const { HTTP_OK_STATUS, HTTP_CLIENT_ERROR_STATUS } = require('../index');

const talkerRoute = express.Router();

talkerRoute.get('/', async (_req, res) => {
  const talkers = await readTalker();
  return res.status(HTTP_OK_STATUS).json(talkers);
});

talkerRoute.get('/:id', async (req, res) => {
  const talkers = await readTalker();
  const { id } = req.params;
  const foundTalker = talkers.find((talker) => (
    talker.id === Number(id)
  ));
  return foundTalker ? (
    res.status(HTTP_OK_STATUS).json(foundTalker)
  ) : res.status(HTTP_CLIENT_ERROR_STATUS).send({ message: 'Pessoa palestrante não encontrada' });
});

module.exports = talkerRoute;