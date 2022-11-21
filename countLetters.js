const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`🤑 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = string => {
  let stringArr = string.split(" ").join("");
  let result = {};

  for (const letter of stringArr) {

    if (result[letter] === undefined) {
      result[letter] = 0;
    }

    result[letter] ++;
  }

  return result;
};

console.log(countLetters("lighthouse in the house")); 
// Expected output: { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 }
// manual check done
// assertEqual will fail because it can not compare the values in the two objects.
assertEqual(countLetters("lighthouse in the house"), { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 });