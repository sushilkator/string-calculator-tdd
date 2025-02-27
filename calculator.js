function add(numbers) {
  if (!numbers) return 0;

  let delimiters = [',', '\n'];
  let customDelimiterMatch = numbers.match(/^\/\/(.+)\n/);

  if (customDelimiterMatch) {
    delimiters.push(customDelimiterMatch[1]);
    numbers = numbers.split('\n')[1];
  }

  let numArray = numbers.split(new RegExp(`[${delimiters.join('')}]`)).map(Number);

  let negatives = numArray.filter(n => n < 0);
  if (negatives.length > 0) {
    throw new Error(`Negative numbers not allowed: ${negatives.join(', ')}`);
  }

  return numArray.reduce((sum, num) => sum + num, 0);
}

module.exports = { add };
