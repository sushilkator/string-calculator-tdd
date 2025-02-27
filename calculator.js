function add(numbers) {
  if (!numbers) return 0;

  let delimiters = [',', '\n']; // Default delimiters
  let customDelimiterMatch = numbers.match(/^\/\/(\[.*?\]|\D)\n/);

  if (customDelimiterMatch) {
    let delimiterSection = customDelimiterMatch[1];

    // Handle multiple custom delimiters like //[***][%%%]\n
    if (delimiterSection.startsWith("[")) {
      delimiters = delimiterSection.match(/\[(.*?)\]/g).map(d => d.slice(1, -1));
    } else {
      delimiters.push(delimiterSection); // Single character delimiter
    }

    numbers = numbers.split('\n').slice(1).join('\n'); // Remove delimiter declaration
  }

  // Split numbers using all defined delimiters (regex-safe)
  let numArray = numbers.split(new RegExp(`[${delimiters.map(d => d.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('')}]`)).map(Number);

  // Ensure invalid formats (like "1,\n2") throw an error
  if (numbers.includes(",\n") || numbers.includes("\n,")) {
    throw new Error("Invalid format: consecutive delimiters cannot include a newline.");
  }

  // Remove NaN values caused by non-numeric input
  numArray = numArray.filter(n => !isNaN(n));

  // Step 5: Handle negatives
  let negatives = numArray.filter(n => n < 0);
  if (negatives.length > 0) {
    throw new Error(`Negative numbers not allowed: ${negatives.join(', ')}`);
  }

  // Step 6: Sum up numbers
  return numArray.reduce((sum, num) => sum + num, 0);
}

module.exports = { add };
