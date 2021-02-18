const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  constructor() {
    this.currentDepth = 1;
  }
  calculateDepth(arr, depth = 1) {
    if (this.currentDepth < depth) {
      this.currentDepth = depth;
    }
    
    arr.forEach(item => {
      if (Array.isArray(item)) {
        this.currentDepth = this.calculateDepth(item, depth + 1);
      }
    });
    let endDepth = this.currentDepth;
    this.currentDepth = 1;
    return endDepth;
	}
};