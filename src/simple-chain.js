const CustomError = require("../extensions/custom-error");

const chainMaker = {
  link: [],

  getLength() {
    this.link.length;
  },

  addLink(value) {
    if (value === undefined) {
      this.link.push('( )');
    } else {
      this.link.push(`( ${value} )`);
      return this;
    }
  },

  removeLink(position) {
    if (!Number.isInteger(position) || position < 1 || position > this.getLength()) {
      this.link = [];
      throw new Error();
    } else {
      this.link.splice(position - 1, 1);
      return this;
    }
  },

  reverseChain() {
    this.link.reverse();
    return this;
  },

  finishChain() {
    let linkCopy = this.link.map(item => item);
    this.link = [];
    return linkCopy.join('~~');
  }
};

module.exports = chainMaker;
