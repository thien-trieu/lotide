const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🤑 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// assertEqual("Lighthouse Labs", "Lighthouse Labs");
// assertEqual(5, 7);


// Create a function head which
// returns the first item in the array.
// The head function should not return the first element as an array.
// It should simply return the element itself.

const head = function(array) {
  
  if (array.length > 0) {
    return array[0];
  } else {
    return undefined;
  }
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), "Hello");