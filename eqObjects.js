const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🤑 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡 Assertion Failed: ${actual} !== ${expected}`);
  }
};

function eqArrays(arr1, arr2) {
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
}

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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

console.log(eqObjects(ab, ba)); // => true
console.log(eqObjects(ab, abc)); // => false

assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

console.log(eqObjects(cd, dc)); // => true
console.log(eqObjects(cd, cd2)); // => false

assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, cd2), false);