const countOnly = (allItems, itemsToCount) => {
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

module.exports = countOnly;