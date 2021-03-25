const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let result = '', addstr = '', repeatTimes, additionRepeatTimes, separator, additionSeparator;
  options.repeatTimes ? repeatTimes = options.repeatTimes : repeatTimes = 1;
  options.additionRepeatTimes ? additionRepeatTimes = options.additionRepeatTimes : additionRepeatTimes = 1;
  if (typeof options.addition === 'undefined') options.addition = '';
  options.separator || !options.separator === '' ? separator = String(options.separator) : separator = '+';
  options.additionSeparator || !options.additionSeparator === '' ? additionSeparator = String(options.additionSeparator) : additionSeparator = '|';
  for (let j = 0; j < additionRepeatTimes; j++){
      addstr += (String(options.addition) + additionSeparator);
    }
  addstr = addstr.substr(0, (addstr.length - additionSeparator.length));
  for (let i = 0; i < repeatTimes; i++){
    result += String(str) + addstr + separator;
  }

  return result.substr(0, (result.length - separator.length));
};
  