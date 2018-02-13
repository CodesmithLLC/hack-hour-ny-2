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

    let bin = binary.split("");
    let base = 2;
    let result = 0;
    if (~~binary[0] === 0 && binary.length === 1) return 0;
    //check for leading 0's
    let i = 0;
    while (~~binary[i] === 0) {
        i += 1;
    }
    //remove the leading zeros
    bin.splice(0, i);
    let last = binary.length - 1;
    for (let j = 0; j < binary.length; j += 1) {
        result += ~~binary[last - j] * Math.pow(base, j);
    }
    return result;
}

module.exports = binToDec;
