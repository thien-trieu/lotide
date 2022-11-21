const findKey = (input, callback) => {
  let result = "";
  for (const key in input) {
    if (callback(input[key])) {
      result = key;
      break;
    }
  }
  return result;
};

module.exports = findKey;