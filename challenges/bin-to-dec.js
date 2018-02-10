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
// [1, 2, 4, 6, 8]

function buildEvensArr(str) {
  let arr = [1];
  let num = 0;
  for (let i = 1; i < str.length; i++) {
    arr.push(num+=2);
  }
  return arr.reverse();
}

function binToDec(binary) {
  if (binary === 0) {
    return 0;
  }
  let binArr = binary.split('');
  let placesArr = buildEvensArr(binary);
  let dec = 0;
  for (let i = binArr.length-1; i >= 0; i--) {
    if (binArr[i] === '1') {
      dec += placesArr[i];
    }
  }
  return dec;
}

module.exports = binToDec;
