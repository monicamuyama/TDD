const assert = require("assert");
const factorial = require("../factorial");

it("0! = 1", () => {
  assert.strictEqual(factorial(0), 1);
});

it("1! = 1", () => {
  assert.strictEqual(factorial(1), 1);
});

it("5! = 120", () => {
  assert.strictEqual(factorial(5), 120);
});

it("10! = 3628800", () => {
  assert.strictEqual(factorial(10), 3628800);
});

it("throws error for negative input", () => {
  assert.throws(() => factorial(-3), /not defined/);
});
