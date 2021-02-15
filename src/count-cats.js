const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let count = 0;

  if (Array.isArray(matrix)) {
    matrix.forEach(item => {
      item.forEach(elem => {
        if (elem == '^^') count++;
      });
    });
  } else {
    return 0;
  }
  
  return count;
};
