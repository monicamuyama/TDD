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


it("multiply 3 * 3 ", () => {
    assertEqual(multiply(3, 3), 9);
});


it("multiply 4 * 4 ", () => {
    assertEqual(multiply(4, 4), 16);
});


it("multiply 23 * 45 ", () => {
    assertEqual(multiply(23, 45), 23*45);
});

it("multiply 10 * 5 ", () => {
    assertEqual(multiply("10", 5), 50);
});