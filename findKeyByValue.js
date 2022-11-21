const findKeyByValue = (object, value) => {
  let result = undefined;
  for (const key in object) {
    if (object[key] === value) {
      result = `${key}`;
    }
  }
  return result;
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

module.exports = findKeyByValue;