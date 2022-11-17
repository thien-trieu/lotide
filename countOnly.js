const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🤑 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countOnly = function(allItems, itemsToCount) {
  let result = {};
  // go through the bag of items
  for (const item of allItems) {
    if (!itemsToCount[item]) {
    // skip this loop
      continue;
    }

    if (result[item] === undefined) {
      result[item] = 0;
    }

    result[item]++;
  }
  return result;
};


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true});
console.log(result1);
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);