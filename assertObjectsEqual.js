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

const eqObjects = function(object1, object2) {
  let result = false;
  let obj1 = Object.keys(object1);
  let obj2 = Object.keys(object2);

  if (obj1.length !== obj2.length) {
    return result;
  }

  for (const value of obj1) {

    if (object1[value] === object2[value]) {
      result = true;
      continue;
    }

    if (Array.isArray(object1[value]) === true && Array.isArray(object2[value]) === true) {
      result = eqArrays(object1[value], object2[value]);
    }
  }
  return result;
};


const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  const inspect = require('util').inspect;

  let result = eqObjects(actual, expected);
  if (result === true) {
    console.log(`🤑 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
    return;
  }
  if (result === false) {
    console.log(`😡 Assertion Failed: ${inspect(actual)} === ${inspect(expected)}`);
  }
};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, ba); // true
assertObjectsEqual(abc, ba); // false


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

assertObjectsEqual(cd, dc); // true
assertObjectsEqual(cd, cd2); // false
