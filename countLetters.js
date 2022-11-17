const countLetters = function(string) {
  let stringArr = string.split(" ").join("");
  let result = {};

  for (letter of stringArr) {

    if (result[letter] === undefined) {
      result[letter] = 0;
    }

    result[letter] ++;
  }

  return result;
};

console.log(countLetters("lighthouse in the house"));