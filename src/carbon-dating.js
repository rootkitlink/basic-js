const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15; 
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {

  if (typeof sampleActivity === 'string' && +sampleActivity !== undefined){
    if (+sampleActivity <= 0) return false;
    let k = 0.693 / HALF_LIFE_PERIOD;
  let t;
  t = Math.log( MODERN_ACTIVITY / +sampleActivity) / k;
  return Math.ceil(t);
  }
  else return false;
  
  
};
