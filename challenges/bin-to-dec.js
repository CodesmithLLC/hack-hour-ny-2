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

// function binToDec(binary) {

//     let bin = binary.split("");
//     let base = 2;
//     let result = 0;
//     if (~~binary[0] === 0 && binary.length === 1) return 0;
//     //check for leading 0's
//     let i = 0;
//     while (~~binary[i] === 0) {
//         i += 1;
//     }
//     //remove the leading zeros
//     bin.splice(0, i);
//     let last = binary.length - 1;
//     for (let j = 0; j < binary.length; j += 1) {
//         result += ~~binary[last - j] * Math.pow(base, j);
//     }
//     return result;
// }


  // console.log(binToDec('0'));
  // console.log(binToDec('11'));
  // console.log(binToDec('100'));
  // console.log(binToDec('101'));
  // console.log(binToDec('1000'));
  console.log(decToBin(0));
  console.log(decToBin(3));
  console.log(decToBin(4));
  console.log(decToBin(5));
  console.log(decToBin(8));

function binToDec(bin) {
  // To string the binary so that it is easier to iterate through
  let binS = bin.split('');
  let dIdx = binS.length - 1;
  let res = 0;
  // Binaries are read from right to left where the first digit represents 2^0 and the second 2^1 and so on
  // We need to iterate through the binary string backwards
  binS.forEach((exp, i) => {
    // 2^0 * i and adding the result to itself as we go
    res += Math.pow(2, i) * binS[dIdx - i];
  });

  // return the result
  return res;
}

function decToBin(dec) {
  if(!dec) return 0;
  
  // the length of the final bin number
  const len = Math.floor(Math.log2(dec));
  let res = '';
  
  for(let i = len; i >= 0; i--) {
    let temp = dec - Math.pow(2, i);
    if (temp >= 0) {
      dec = temp;
      res += '1';
    }
    else res += '0';
  }
  return res;
}

module.exports = binToDec;
