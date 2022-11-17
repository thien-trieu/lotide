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

// Logging if Assertion of Arrays
function assertArraysEqual(arr1, arr2) {
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


const letterPositions = function(sentence) {
  const stringArr = sentence.split("");
  const results = {};

  for (const index in stringArr) {
    if (stringArr[index] === " ") {
      continue;
    }

    if (results[stringArr[index]]) {
      results[stringArr[index]].push(index);

    } else {
      results[stringArr[index]] = [index];
    }
  }

  return results;
};
console.log(letterPositions("lighthouse in the house"))
