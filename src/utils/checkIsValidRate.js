function checkIsValidRate(rate) {
  return rate <= 5 && rate >= 1;
}

module.exports = checkIsValidRate;