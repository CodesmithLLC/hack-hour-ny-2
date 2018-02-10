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
  if (binary === '0') return 0;
  if (binary === '1') return 1;
  const n = binary.length;
  return Math.pow(2,n-1) * Number(binary[0]) + binToDec(binary.substring(1));
}

function decToBin(decimal) {
  const b = [];
  while (decimal > 0) {
    b.unshift((decimal%2).toString());
    decimal = Math.floor(decimal/2);
  }
  return b.join('');
}

function decToHex(decimal) {
  const b = [];
  while (decimal > 0) {
    b.unshift(decimal%16);
    decimal = Math.floor(decimal/16);
  }
  return b.map((num)=>{
    if (num < 10) return num.toString();
    if (num === 10) return 'A';
    if (num === 11) return 'B';
    if (num === 12) return 'C';
    if (num === 13) return 'D';
    if (num === 14) return 'E';
    if (num === 15) return 'F';
  }).join('');
}


module.exports = binToDec;
