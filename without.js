const without = (source, itemsToRemove) => {
  let updatedItems = [];
  for (let i = 0; i < source.length; i++) {
    let matches = [];
    for (let x = 0; x < itemsToRemove.length; x++) {
      
      if (source[i] === itemsToRemove[x]) {
        matches.push(source[i]);
      }
    }
    if (matches.indexOf(source[i]) === -1) {
      updatedItems.push(source[i]);
    }
  }
  return updatedItems;
};

console.log(without([1, 2, 3], [1])); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]); // should pass assertion


module.exports = without;