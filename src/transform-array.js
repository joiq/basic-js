const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (Array.isArray(arr)) {
    let prev = null;
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
      switch (arr[i]) {
        case '--discard-prev':
          if (newArr.length > 0 && prev !== null) {
            newArr.pop();
          }
          break;

        case '--discard-next':
          prev = null;
          if (i < arr.length - 1) {
            i++;
          }            
          break;

        case '--double-next':
          if (i < arr.length - 1) {
            newArr.push(arr[i + 1]);
          }
          break;

        case '--double-prev':
          if (newArr.length > 0 && prev !== null) {
            newArr.push(prev);        
          }
          break;

        default: 
          prev = arr[i];
          newArr.push(prev);
          break;
      }
    }

    return newArr;
  } else {
    throw new Error();
  }
};
