const eqObjects = require('./eqObjects')

const assertObjectsEqual = (actual, expected) => {
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

module.exports = assertObjectsEqual;