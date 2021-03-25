const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let i = 0, depth = 0;
    if (Array.isArray(arr)) {
      for (let j = 0; j < arr.length; j++){
        i = this.calculateDepth(arr[j]);
        if (i > depth) {
          depth = i;
          i = 0;
        } 
      }
      return depth + 1;
    }
    else {
      return 0;
    }
  
  }
};