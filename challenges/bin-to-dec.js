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
  let result = 0;
  let exponent = 0;

  for (let i = binary.length - 1; i >= 0; i--) {
    result += power(exponent, parseInt(binary[i]));
    exponent++;
  }

  return result;
}

function power(num, bin, total = 1) {
  if (num === 0 & bin === 0) return 0;
  if (num === 0) return total;
  if (bin === 0) return 0;
  return power(num - 1, bin, total * 2);
}

module.exports = binToDec;
