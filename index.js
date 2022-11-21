const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const countOnly = require('./countOnly');
const countLetters = require('./countLetters');
const without = require('./without');
const findKeyByValue = require('./findKeyByValue');
const letterPositions = require('./letterPositions');
const map = require('./map')
const takeUntil = require('./takeUntil')
const findKey = require('./findKey')
const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays')
const assertArraysEqual = require('./assertArraysEqual')
const eqObjects = require('./eqObjects')
const assertObjectsEqual = require('./assertObjectsEqual')

module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  countOnly: countOnly,
  without: without,
  countLetters: countLetters, 
  findKeyByValue: findKeyByValue,
  letterPositions: letterPositions,
  map: map,
  takeUntil: takeUntil,
  findKey: findKey,
  assertEqual: assertEqual,
  eqArrays: eqArrays,
  assertArraysEqual: assertArraysEqual,
  eqObjects: eqObjects,
  assertObjectsEqual: assertObjectsEqual
};