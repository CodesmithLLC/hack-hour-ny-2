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
  let base = 2;
  let exp = binary.length - 1;

  return binary.split('').reduce((num, dig) => {
    if(dig === '1') num += Math.pow(base, exp);
    exp--;
    return num;
  }, 0);
}

function decToBin(dec) {
  let start = 0;
  let neg = dec < 0;
  dec = Math.abs(dec);

  while(Math.pow(2, start) <= dec){
    start++;
  }
  if(!start) return '0';

  let bin = '';

  for(let i = start - 1; i >= 0; i--){
    const num = Math.pow(2, i);

    if(dec >= num){
      bin += '1';
      dec -= num;
    }
    else {
      bin += '0';
    }
  }

  return bin;
}

console.log(binToDec('0'))   //-> 0
console.log(binToDec('11'))  //-> 3
console.log(binToDec('100')) //-> 4
console.log(binToDec('101')) //-> 5
console.log(binToDec('0101')) //-> 5

console.log(decToBin(0))   //-> 0
console.log(decToBin(3))  //-> 3
console.log(decToBin(4)) //-> 4
console.log(decToBin(5)) //-> 5


module.exports = binToDec;
