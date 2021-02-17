const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const obj = {
    turns: Math.pow(2, disksNumber) - 1,
    seconds: 0
  };
  
  obj.seconds = Math.floor(obj.turns * 60 * 60 / turnsSpeed);
  
  return obj;
};
