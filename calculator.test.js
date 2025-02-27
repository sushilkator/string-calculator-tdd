const { add } = require('./calculator');

test('returns 0 for an empty string', () => {
  expect(add("")).toBe(0);
});

test('returns the number itself if only one number is provided', () => {
  expect(add("1")).toBe(1);
});

test('returns the sum of two numbers', () => {
  expect(add("1,5")).toBe(6);
});

test('handles multiple numbers', () => {
  expect(add("1,2,3,4")).toBe(10);
});

test('handles new lines as delimiters', () => {
  expect(add("1\n2,3")).toBe(6);
});

test('supports different delimiters', () => {
  expect(add("//;\n1;2")).toBe(3);
});

test('throws an exception for negative numbers', () => {
  expect(() => add("1,-2,3,-4")).toThrow("Negative numbers not allowed: -2, -4");
});
