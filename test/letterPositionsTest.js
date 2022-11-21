const assert = require('chai').assert;
const letterPositions   = require('../letterPositions');


describe("#letterPositionsTest", () => {
  it("returns { h: [ 0 ], e: [ 1 ], l: [ 2, 3 ], o: [ 4 ] } for 'hello'", () => {
    assert.deepEqual(letterPositions("hello"), { h: [ 0 ], e: [ 1 ], l: [ 2, 3 ], o: [ 4 ] });
  });

  it("returns { y: [ 0 ], e: [ 1 ], l: [ 2, 3 ], o: [ 4 ], w: [ 5 ] } for 'yellow'", () => {
    assert.deepEqual(letterPositions("yellow"), { y: [ 0 ], e: [ 1 ], l: [ 2, 3 ], o: [ 4 ], w: [ 5 ] });
  });
});
