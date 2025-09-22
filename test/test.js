const assert = require("assert");
const multiply = require("../multiply");

function assertEqual(actual, expected) {
  assert.strictEqual(actual, expected);
}

it("multiply", () => {
    assertEqual(multiply(1, 1), 1);
});
