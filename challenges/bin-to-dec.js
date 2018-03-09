/* You are given a string that represents a binary number
 *
 * Write a function that converts the binary string to a decimal number
 *
 * Example:
* 	binToDec('0')   -> 0
 * 	binToDec('11')  -> 3
 * 	binToDec('100') -> 4
 * 	binToDec('101') -> 5
 *  binToDec('0101') -> 5
 *
 * Extension:
 * Write a function that converts a decimal number to binary (then maybe hexadecimal)
 */

function binToDec(binary) {
	let sum = 0;
	// for loop to iterate thru string
	for (let i = 0; i < binary.length; i++) {
		// value of element * 2 to the power length - 1 - i 
		// as you go up in the index you go up in the power
		sum += binary[i] * Math.pow(2, binary.length - 1 - i);
	}

	return sum
}

console.log(binToDec('0101')); // -> 5

module.exports = binToDec;
