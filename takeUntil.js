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
//takeUntil function
const takeUntil = (array, callback) => {
  const results = [];
  for (let item of array) {
    if (callback(item)) {
      break;
    }
    results.push(item);
  }
  return results;
};


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1); // Expected output: [ 1, 2, 5, 7, 2 ]

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2); // Expected output: [ 'I\'ve', 'been', 'to', 'Hollywood' ]

assertArraysEqual(takeUntil(data2, x => x === ','), [ 'I\'ve', 'been', 'to', 'Hollywood' ]);