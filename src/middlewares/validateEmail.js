const checkIsValidEmail = require('../utils/checkIsValidEmail');

function validateEmail(req, res, next) {
  const { email } = req.body;

  if (!email) {
    return res.status(400).send({ message: 'O campo "email" é obrigatório' });
  }

  const isValidEmail = checkIsValidEmail(email);

  if (!isValidEmail) {
    return res.status(400).send({ message: 'O "email" deve ter o formato "email@email.com"' });
  }

  return next();
}

module.exports = validateEmail;