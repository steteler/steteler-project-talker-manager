const checkIsValidPassword = require('../utils/checkIsValidPassword');

function validatePassword(req, res, next) {
  const { password } = req.body;

  if (!password) {
    return res.status(400).send({ message: 'O campo "password" é obrigatório' });
  }

  const isValidPassword = checkIsValidPassword(password);

  if (!isValidPassword) {
    return res.status(400).send({ message: 'O "password" deve ter pelo menos 6 caracteres' });
  }

  return next();
}

module.exports = validatePassword;