const checkIsValidToken = require('../utils/checkIsValidToken');

function validateToken(req, res, next) {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).send({ message: 'Token não encontrado' });
  }

  const isValidToken = checkIsValidToken(token);

  if (!isValidToken) {
    return res.status(401).send({ message: 'Token inválido' });
  }

  return next();
}

module.exports = validateToken;