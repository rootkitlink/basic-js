const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],
  
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    value === undefined ? this.arr.push('()') : this.arr.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (typeof position === 'number'){
      this.arr.splice(position - 1, 1);
      return this;
    }
    else {
      this.arr = [];
      throw new 'Error';
    }
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let newArr = this.arr.join('~~');
    this.arr = [];
    return newArr;
  }
  
};

module.exports = chainMaker;
