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

const without = (source, itemsToRemove) => {
  let updatedItems = [];
  for (let i = 0; i < source.length; i++) {
    let matches = [];
    for (let x = 0; x < itemsToRemove.length; x++) {
      
      if (source[i] === itemsToRemove[x]) {
        matches.push(source[i]);
      }
    }
    if (matches.indexOf(source[i]) === -1) {
      updatedItems.push(source[i]);
    }
  }
  return updatedItems;
};

without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]); // should pass assertion