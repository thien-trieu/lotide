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

module.exports = countLetters;