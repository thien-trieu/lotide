const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const middle = (array) => {
  let len = array.length;
  let result = [];
  // log empty array if only 2 elements or less
  if (len <= 2) {
    // no middle
    return result;
  }
  // check if length is odd
  if (len % 2 !== 0) {
    // push the middle index
    result.push(array[Math.floor(len / 2)]);
  }
  // check if length is even
  if (len % 2 === 0) {
      // push the middle 2 indexes
      result.push(array[len / 2 - 1], array[len / 2]);
  }
  return result;
};

module.exports = middle;