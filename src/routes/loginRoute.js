const express = require('express');
const generateToken = require('../utils/regenerateToken');

const loginRoute = express.Router();

loginRoute.post('/', (req, res) => {
  // const { email, password } = req.body;
  console.log(200);
  const token = generateToken();
  return res.status(200).json({ token });
});

module.exports = loginRoute;