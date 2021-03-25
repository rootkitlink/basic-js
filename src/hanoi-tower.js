const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let calculateHanoi = {turns: 0, seconds: 0};
  calculateHanoi.turns = Math.pow(2, disksNumber) - 1;
  calculateHanoi.seconds = Math.floor(calculateHanoi.turns * 3600 / turnsSpeed);
  return calculateHanoi;
};
