const assert = require("assert");
const multiply = require("../multiply");

function assertEqual(actual, expected) {
  assert.strictEqual(actual, expected);
}

it("multiply 1 *1 ", () => {
    assertEqual(multiply(1, 1), 1);
});

it("multiply 2 * 2 ", () => {
    assertEqual(multiply(2, 2), 4);
});