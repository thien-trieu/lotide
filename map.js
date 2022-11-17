// function to check if values of two aray are equal
const eqArrays = function(arr1, arr2) {
  let len = arr1.length;
  if (len !== arr2.length) {
    return false;
  }
  
  for (let i = 0; i < len; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

// Logging Assertion of Arrays
const assertArraysEqual = function(arr1, arr2) {
  // Storing return of eqArray in result
  let result = eqArrays(arr1, arr2);
  if (result === true) {
    console.log(`🤑 Assertion Passed: ${arr1} === ${arr2}`);
    return;
  }
  if (result === false) {
    console.log(`😡 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

// Map excercise
const words = ["ground", "control", "to", "major", "tom"];

// Map Function
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);

// Testing assertion for results1
assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);