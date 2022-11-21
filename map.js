const eqArrays = (arr1, arr2) => {
  const len = arr1.length;
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


const words = ["ground", "control", "to", "major", "tom"];

const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);