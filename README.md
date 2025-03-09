# Palindrome Binary to Decimal Converter

## Overview
This project reads a file containing numerical data, processes the numbers to identify palindromes, converts the palindrome numbers into their binary representation, and then manually calculates their decimal values. Finally, the sum of all converted decimal values is computed and displayed.

## Features
- Reads numbers from a file (`numbers.txt`).
- Identifies palindromes from the list of numbers.
- Converts each palindrome number into binary.
- Converts the binary representation back into decimal manually.
- Calculates the total sum of the converted decimal values.

## File Structure
```
├── service.js        # Handles file reading
├── helpers.js        # Contains utility functions for calculations
├── vendor.js         # Main processing logic
├── numbers.txt       # Input file containing numbers
├── README.md         # Project documentation
```

## Installation & Usage
### Prerequisites
Ensure you have **Node.js** installed on your system.

### Installation
Clone the repository and navigate into the project folder:
```sh
git clone <repo_url>
cd <project_folder>
```

### Running the Program
To execute the program, run the following command:
```sh
node vendor.js
```

## Explanation of Files
### `service.js`
This file contains the function responsible for reading the numerical data from `numbers.txt`.

### `vendor.js`
This is the main execution file that:
1. Reads the numbers using `readFileData()`.
2. Identifies palindrome numbers.
3. Converts the palindrome numbers into binary.
4. Manually converts the binary numbers back to decimal.
5. Computes and prints the sum of all converted decimal values.

### `helpers.js`
Contains utility functions:
- **`getDigitsAfter(data, searchNumber)`**: Determines how many digits exist after a given number in a string.
- **`calculateSumOfDecimals(numbers)`**: Computes the total sum of all converted decimal values.

## Example Output
### Input (`numbers.txt`)
```
101,202,303,64646,10100101
```
### Console Output
```
[ 5, 10, 15, 64646, 165 ]
Total sum of converted decimal values: 64841
```

## Notes
- The program ensures that **only palindrome numbers** are processed.
- The decimal conversion is done manually for understanding purposes.

## License
This project is open-source and available for modification. Feel free to contribute!

