const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🤑 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡 Assertion Failed: ${actual} !== ${expected}`);
  }
};
//assertEqual("Lighthouse Labs", "Lighthouse Labs");


const findKey = (input, callback) => {
  let result = "";
  for (const key in input) {
    if (callback(input[key]) === true) {
      result = key;
      break;
    }
  }
  return result;
};

let results1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"

console.log(results1);
assertEqual(results1, "noma");