const args = process.argv.slice(2);
console.log(args);

const reverse = function(input) {
  let newString = "";
  for (let i = 0; i < input.length; i++) {
    for (let x = input[i].length - 1; x >= 0; x--) {
      if (input[i][x] !== undefined)
        newString += input[i][x];
    }
    if (i !== input.length - 1) {
      newString += "\n";
    }
  }
  console.log(newString);
};

reverse(args);