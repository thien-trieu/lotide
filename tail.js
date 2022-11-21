const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`🤑 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = array => {
  let results = [];
  for (let i = 0; i < array.length; i++) {
    if (i !== 0) {
      results.push(array[i]);
    }
  }
  return results;
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual will fail because it can not check the values of the two arrays
assertEqual(result, ["Lighthouse", "Labs"]);
