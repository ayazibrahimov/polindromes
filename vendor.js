import readFileData from './service.js'; // Importing function to read data from file

import {getDigitsAfter,calculateSumOfDecimals} from './helpers.js'

const filePath = './numbers.txt'; // File containing numeric data

async function main() {
    const rawData = await readFileData(filePath); // Read data from file
    processNumbers(rawData); // Process and analyze the numbers
}

async function processNumbers(data) {
    const numberStrings = data.split(","); // Splitting the data by commas

    const numbers = numberStrings
    .map(num => parseInt(num.replace(/"/g, ''), 10)) // Convert to integers
    .filter(num => !isNaN(num)); // Remove NaN values
    
    findPalindromes(numbers); // Find and print palindrome numbers
}

async function findPalindromes(numberList) {
    const palindromes = numberList.filter(num => {
        const numStr = num.toString(); // Convert number to string
        return numStr == numStr.split('').reverse().join('') // Check if it's a palindrome
    });

    console.log(palindromes);
    convertBinaryPalindromesToDecimal(palindromes);
}


/**
 * Converts each palindrome number into binary and then manually calculates its decimal value
 */

async function convertBinaryPalindromesToDecimal(palindromes) {
    let decimalValues = [];

    palindromes.forEach(num => {
        let total = 0;
        let binaryStr = num.toString(); // Convert the number to a string
        let power = getDigitsAfter(+binaryStr, +binaryStr[0]); // Get the number of digits after the first one

        for (let i = 0; i < binaryStr.length; i++) { // Convert binary to decimal manually
            total += binaryStr[i] * Math.pow(2, power);
            power--;
        }
        decimalValues.push(total);  // console.log(`The palindrome ${num} thus has the decimal value ${total}`);
    });

    console.log(decimalValues); // Output the converted decimal values
    console.log(calculateSumOfDecimals(decimalValues));
}


main(); 





