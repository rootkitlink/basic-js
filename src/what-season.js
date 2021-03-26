const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  
  if (typeof(date) === 'undefined') { return 'Unable to determine the time of year!';}
  if (isNaN(date.getTime())) { throw new ('Error');}
  
  let MONTH = date.getMonth();
  if (MONTH === 11 || MONTH <= 1) return 'winter';
  if (MONTH <= 4) return 'spring';
  if (MONTH <= 7) return 'summer';
  if (MONTH <= 10) return 'autumn';
};
