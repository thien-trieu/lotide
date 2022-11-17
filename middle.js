// function to check if values of two aray are equal
const eqArrays = function (arr1, arr2) {
  let len = arr1.length;
  if (len !== arr2.length){
    return false;
  }
  
  for (let i = 0; i < len; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

// Uses eqArray and logs out if assertion passed or failed
const assertArraysEqual = function (arr1, arr2) {
  // Storing return of eqArray in result
  let result = eqArrays(arr1, arr2);
  if (result === true) {
    console.log(`🤑 Assertion Passed: ${arr1} === ${arr2}`);
    return;
  }
  if (result === false) {
    console.log(`😡 Assertion Failed: ${arr1} !== ${arr2}`);
  }
}


// Implement middle which will take in an array
// and return the middle-most element(s) of the given array.

const middle = function(array) {
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
    if (array[len / 2 - 1] || array[len / 2]) {
      // push the middle 2 indexes
      result.push(array[len / 2 - 1]);
      result.push(array[len / 2]);
    }
  }
  return result;
};


assertArraysEqual(middle([1]), []);
middle([1, 2]); // => []

assertArraysEqual(middle([1, 2, 3]), [2]);
middle([1, 2, 3]); // => [2]

assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
middle([1, 2, 3, 4, 5]); // => [3]

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
middle([1, 2, 3, 4]); // => [2, 3]

assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
middle([1, 2, 3, 4, 5, 6]); // => [3, 4]