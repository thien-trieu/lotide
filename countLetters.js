const assertEqual = function(actual, expected) {
  console.log('actual', actual);
  console.log('expected', expected);
  if (actual === expected) {
    console.log(`🤑 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡 Assertion Failed: ${actual} !== ${expected}`);
  }
};

function countLetters(string) {
  let stringArr = string.split(" ").join("");
  let result = {};

  for (letter of stringArr) {

    if (result[letter] === undefined) {
      result[letter] = 0;
    }

    result[letter] ++;
  }

  return result;
}
console.log(countLetters("lighthouse in the house"));