const express = require('express');
const validateAge = require('../middlewares/validateAge');
const validateName = require('../middlewares/validateName');
const validateRate = require('../middlewares/validateRate');
const validateTalk = require('../middlewares/validateTalk');
const validateToken = require('../middlewares/validateToken');
const validateWatchedAt = require('../middlewares/validateWatchedAt');
const addNewTalker = require('../utils/addNewTalker');
const readTalker = require('../utils/readTalker');
const updateTalker = require('../utils/updateTalker');

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

talkerRoute.post('/',
  validateToken,
  validateName,
  validateAge,
  validateTalk,
  validateWatchedAt,
  validateRate,
  async (req, res) => {
    const talker = req.body;
    const newTalker = await addNewTalker(talker);
    return res.status(201).json(newTalker);
  });

talkerRoute.put('/:id',
  validateToken,
  validateName,
  validateAge,
  validateTalk,
  validateWatchedAt,
  validateRate,
  async (req, res) => {
    const { id } = req.params;
    const newTalker = req.body;
    const updatedTalker = await updateTalker(Number(id), newTalker);

    return res.status(200).json(updatedTalker);
  });

module.exports = talkerRoute;