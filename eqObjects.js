const eqArrays = require('./eqArrays');

const eqObjects = (object1, object2) => {
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

module.exports = eqObjects;