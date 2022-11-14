const checkIsValidWatchedAt = require('../utils/checkIsValidWatchedAt');

function validateWatchedAt(req, res, next) {
  const { watchedAt } = req.body.talk;

  if (!watchedAt) {
    return res.status(400).send({ message: 'O campo "watchedAt" é obrigatório' });
  }

  const isValidWatchedAt = checkIsValidWatchedAt(watchedAt);

  if (!isValidWatchedAt) {
    return res.status(400).send({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
  }

  return next();
}

module.exports = validateWatchedAt;