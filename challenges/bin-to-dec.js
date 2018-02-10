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
   let binaryAlt = binary.split('');
   let result = 0;
   let multiplier = 1;
   while (binaryAlt.length > 0) {
     if (binaryAlt.pop() === '1') result += multiplier;
     multiplier *= 2;
   }
   return result;
 }

module.exports = binToDec;
