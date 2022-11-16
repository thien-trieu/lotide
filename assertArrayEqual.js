// function to check if values of two aray are equal
const eqArrays = function (arr1, arr2) {
  let len = arr1.length;
  for (let i = 0; i < len; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

// Logging if Assertion of Arrays
function assertArraysEqual(arr1, arr2) {
  // Storing return of eqArray in result
  let result = eqArrays(arr1, arr2);
  if (result === true){
    console.log(`🤑 Assertion Passed: ${arr1} === ${arr2}`)
    return;
  }
  if (result === false){
    console.log(`😡 Assertion Failed: ${arr1} !== ${arr2}`)
  }
}

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false