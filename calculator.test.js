const { add } = require('./calculator');

describe("String Calculator", () => {

  // Basic Tests
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
    expect(add("1,2,3,4,5,6")).toBe(21);
  });

  // Handling New Lines
  test('handles new lines between numbers', () => {
    expect(add("1\n2,3")).toBe(6);
  });

  test('handles only new line as separator (without commas)', () => {
    expect(add("1\n2\n3\n4")).toBe(10);
  });

  test('throws error if new line is placed incorrectly (e.g., between delimiters)', () => {
    expect(() => add("1,\n2")).toThrow();
  });

  // Custom Delimiters
  test('supports different single-character delimiters', () => {
    expect(add("//;\n1;2;3")).toBe(6);
  });

  test('supports different multi-character delimiters', () => {
    expect(add("//[***]\n1***2***3")).toBe(6);
  });

  test('supports multiple delimiters of different lengths', () => {
    expect(add("//[*][%]\n1*2%3")).toBe(6);
  });

  test('supports multiple multi-character delimiters', () => {
    expect(add("//[***][%%%]\n1***2%%%3")).toBe(6);
  });

  // Negative Numbers Handling
  test('throws an exception for a single negative number', () => {
    expect(() => add("-1,2,3")).toThrow("Negative numbers not allowed: -1");
  });

  test('throws an exception for multiple negative numbers', () => {
    expect(() => add("1,-2,-3,4")).toThrow("Negative numbers not allowed: -2, -3");
  });

  test('throws an exception even with custom delimiters', () => {
    expect(() => add("//;\n1;2;-3;-4")).toThrow("Negative numbers not allowed: -3, -4");
  });

  // Large Inputs & Performance
  test('handles large numbers of inputs efficiently', () => {
    const largeInput = Array.from({ length: 1000 }, (_, i) => i + 1).join(",");
    const expectedSum = (1000 * (1000 + 1)) / 2; // Sum of first 1000 numbers
    expect(add(largeInput)).toBe(expectedSum);
  });

  test('handles large numbers correctly', () => {
    expect(add("1000,2000,3000")).toBe(6000);
  });

  // Edge Cases
  test('ignores non-numeric values gracefully', () => {
    expect(add("1,a,3")).toBe(4);
  });

  test('returns 0 if input contains only delimiters', () => {
    expect(add(",,,,")).toBe(0);
  });

  test('handles numbers with spaces correctly', () => {
    expect(add(" 1 , 2 , 3 ")).toBe(6);
  });

  test('handles numbers with mixed spaces and delimiters correctly', () => {
    expect(add("//;\n 1 ; 2 ; 3 ")).toBe(6);
  });

});
