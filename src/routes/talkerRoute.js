const express = require('express');
const readTalker = require('../utils/readTalker');

const talkerRoute = express.Router();

talkerRoute.get('/', async (_req, res) => {
  const talkers = await readTalker();
  return res.status(200).json(talkers);
});

talkerRoute.get('/:id', async (req, res) => {
  const talkers = await readTalker();
  const { id } = req.params;
  const foundTalker = talkers.find((talker) => (
    talker.id === Number(id)
  ));
  return foundTalker ? (
    res.status(200).json(foundTalker)
  ) : res.status(404).send({ message: 'Pessoa palestrante não encontrada' });
});

module.exports = talkerRoute;