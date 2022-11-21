const letterPositions = sentence => {
  const stringArr = sentence.split("");
  const results = {};

  stringArr.forEach((value, index) => {

    if (value !== " ") {

      if (results[value] === undefined) {
        results[value] = [];
      }
      if (results[value]) {
        results[value].push(index);
      }
    }
  });
  return results;
};

module.exports = letterPositions;