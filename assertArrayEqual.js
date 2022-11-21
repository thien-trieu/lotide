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

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => pass
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => fail
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => pass
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => fail