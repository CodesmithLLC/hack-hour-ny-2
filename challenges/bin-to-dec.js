/* You are given a string that represents a binary number
 *
 * Write a function that converts the binary string to a decimal number
 *
 * Example:
 * 	binToDec('0000') -> 0
 *  binToDec('0001') -> 1
 * 	binToDec('0010') -> 2
 * 	binToDec('0011') -> 3
 * 	binToDec('0100') -> 4
 * 	binToDec('0101') -> 5
 *  binToDec('0101') -> 5
 *
 * Extension:
 * Write a function that converts a decimal number to binary (then maybe hexadecimal)
 */

function binToDec(binary) {
	let counter = 0; 

	if(Number(binary) === 0)
		return 0; 

	if(Number(binary.charAt(0)) !== 0)
		counter += 8
	if(Number(binary.charAt(1)) !== 0)
		counter += 4
	if(Number(binary.charAt(2)) !== 0)
		counter += 2
	if(Number(binary.charAt(3)) !== 0)
		counter += 1

	return counter;
}


module.exports = binToDec;
