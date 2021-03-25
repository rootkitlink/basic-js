const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15; 
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {

  if (isNaN(sampleActivity)) return false;
  if (typeof sampleActivity === 'string' && +sampleActivity !== undefined){
    if (Number(sampleActivity) <= 0 || Number(sampleActivity) >= MODERN_ACTIVITY) return false;
    else {
      let k = 0.693 / HALF_LIFE_PERIOD;
    let t = Math.log( MODERN_ACTIVITY / Number(sampleActivity)) / k;
    return Math.ceil(t);
    }
    
    }
    else return false;
};
