const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const countOnly = require('./countOnly');
const countLetters = require('./countLetters');
const without = require('./without');
const findKeyByValue = require('./findKeyByValue');
const letterPositions = require('./letterPositions');
const map = require('./map')

module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  countOnly: countOnly,
  without: without,
  countLetters: countLetters, 
  findKeyByValue: findKeyByValue,
  letterPositions: letterPositions,
  map: map
};