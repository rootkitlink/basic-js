const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(!Array.isArray(arr)) throw new 'Error';
  if (arr.length === 0) return [];
  let resultarray = [];
    for (i = 0; i < arr.length; i++){
    if (arr[i] == '--discard-prev' && i == 0 || arr[i] == `--double-prev` && i == 0){
    } else

    if (arr[i] == '--discard-next' && i == arr.length - 1 || arr[i] == `--double-next` && i == arr.length - 1){
    } else

    if (arr[i] == '--discard-next' &&  arr[i + 2] == '--discard-prev' || arr[i] == '--discard-next' && arr[i + 2] == '--double-prev'){
      i += 2
    } else 

    if (arr[i] === '--discard-next' && i < arr.length - 1){
      i++;
    } else
  
    if (arr[i] === '--discard-prev'){
      resultarray.pop();
    } else
  
    if (arr[i] === '--double-next' && i < arr.length - 1){
      resultarray.push(arr[i + 1]);
    } else
  
    if (arr[i] === '--double-prev'){
      resultarray.push(arr[i - 1]);
    } 
    else { 
      resultarray.push(arr[i])
    };
  }
  
  return resultarray;
};


