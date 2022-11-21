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


const letterPositions = sentence => {
  const stringArr = sentence.split("");
  const results = {};

  stringArr.forEach((value, index) => {

    if (value !== " ") {

      if (results[value] === undefined) {
        results[value] = [];
      }
      if (results[value]) {
        results[value].push(index);
      }
    }
  });
  return results;
};

console.log(letterPositions("lighthouse in the house"));
console.log(letterPositions("hello"));

assertArraysEqual(letterPositions("hello").e, [1]);