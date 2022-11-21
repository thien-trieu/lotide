const assertEqual = require('../assertEqual');

assertEqual("Lighthouse Labs", "Lighthouse Labs"); // should pass
assertEqual("Lighthouse Labs", "Lighthouse"); // should fail
assertEqual(7, 7); // should pass
assertEqual(5, 7); // should fail


// const assert = require('chai').assert;
// const assertEqual   = require('../assertEqual');

// describe("#assertEqual", () => {
//   it("returns '7' for '7'", () => {
//     assert.strictEqual(assertEqual('7'), '7');
//   });
// });