const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let countCat = 0;
  matrix.forEach(element => {
      for (let i = 0; i < element.length; i++){
        element[i] == '^^' ? countCat++ : countCat  * 1;
      }
  });
  return countCat;
};
