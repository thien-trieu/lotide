const tail = array => {
  let results = [];
  for (let i = 0; i < array.length; i++) {
    if (i !== 0) {
      results.push(array[i]);
    }
  }
  return results;
};

module.exports = tail;