# String Calculator TDD Kata

This is a simple implementation of the **String Calculator Kata** using **JavaScript** and **Test-Driven Development (TDD)** with **Jest**.

## Features

- Handles empty input (returns `0`).
- Supports comma-separated numbers.
- Allows new lines as delimiters (`\n`).
- Supports custom delimiters (e.g., `//;\n1;2;3`).
- Supports multiple and multi-character delimiters.
- Throws an error for negative numbers, listing all negatives.

## Installation & Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/sushilkator/string-calculator-tdd.git
   cd string-calculator-tdd
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

## Usage

Run the function in a **Node.js** environment:

```javascript
const { add } = require("./calculator");
console.log(add("1,2,3")); // Output: 6
```

Run in terminal:

```sh
node calculator.js
```

## Running Tests

Run all tests with:

```sh
npm test
```

## Contributing

Contributions are welcome! Feel free to fork this repository and submit a pull request.

## License

This project is **MIT Licensed**.
