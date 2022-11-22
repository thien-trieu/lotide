const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const countOnly = require('./countOnly');
const countLetters = require('./countLetters');
const without = require('./without');
const findKey = require('./findKey')
const findKeyByValue = require('./findKeyByValue');
const letterPositions = require('./letterPositions');
const map = require('./map')
const takeUntil = require('./takeUntil')
const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays')
const assertArraysEqual = require('./assertArraysEqual')
const eqObjects = require('./eqObjects')
const assertObjectsEqual = require('./assertObjectsEqual')

module.exports = {
  head,
  tail,
  middle,
  countOnly,
  countLetters, 
  without,
  findKey,
  findKeyByValue,
  letterPositions,
  map,
  takeUntil,
  assertEqual,
  eqArrays,
  assertArraysEqual,
  eqObjects,
  assertObjectsEqual
};