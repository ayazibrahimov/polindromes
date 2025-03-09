/**
 * Function to count how many digits are present after a given number in a string representation.
 */
export function getDigitsAfter(data, searchNumber) {
    let str = data.toString(); 
    let index = str.indexOf(searchNumber.toString()); 
    return index !== -1 ? str.length - index - searchNumber.toString().length : -1;
}

/**
 * Function to calculate the total sum of decimal values.
 */
export function calculateSumOfDecimals(numbers) {
    let total = numbers.reduce((sum, value) => sum + value, 0);
    return(`Total sum of converted decimal values: ${total}`);
}