const eqArrays = require('./eqArrays');

const assertArraysEqual = (arr1, arr2) => {
  const result = eqArrays(arr1, arr2);
  if (result === true) {
    console.log(`🤑 Assertion Passed: ${arr1} === ${arr2}`);
    return;
  }
  if (result === false) {
    console.log(`😡 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

module.exports = assertArraysEqual;
