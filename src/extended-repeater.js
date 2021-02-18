const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let mainString = '';
  let addString = '';
  let separator = ('separator' in options) ? options.separator : '+';
  
  if (options.repeatTimes || options.additionRepeatTimes) {
    for (let i = 0; i < options.additionRepeatTimes; i++) {
      if (i != options.additionRepeatTimes - 1) {
        addString += options.addition + options.additionSeparator;
      } else {
        addString += options.addition;
      }
    }
    
    for (let i = 0; i < options.repeatTimes; i++) {
      if (i != options.repeatTimes - 1) {
        mainString += str + addString + separator;
      } else {
        mainString += str + addString;
      }
    }
    
  } else {
    mainString += str + options.addition;
  }

  return mainString;
};
  