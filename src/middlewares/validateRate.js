const checkIsValidRate = require('../utils/checkIsValidRate');

function validateRate(req, res, next) {
  const { rate } = req.body.talk;

  if (rate === undefined) {
    return res.status(400).send({ message: 'O campo "rate" é obrigatório' });
  }

  const isValidRate = checkIsValidRate(rate);

  if (!Number.isInteger(rate) || !isValidRate) {
    return res.status(400).send({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
  }

  return next();
}

module.exports = validateRate;