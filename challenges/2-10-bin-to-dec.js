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
  /* 2^0 * n, 2*1 * n, 2*2 * n, 2*3 * n, ...

   binary % 10 = first 
    binary % 100 

    binary.toString().split()
  */
 
  // let num = binary.toString().split('');
  // let len = num.length;

  // //   console.log(num)
  // //   console.log(parseInt(num[len-1]))

  // num = num.map((el) => parseInt(el))
  // //              {
  // //     return parseInt(el)
  // //   });
  // //   console.log(num[len-1])

  // let result = 0;

  // for (let i = 0; i < len; i++) {
  //   result += num[len - i - 1] * Math.pow(2, i);
  // }


  // console.log(result)

  // return result;

  
  // let idx = 0;
  // return binary.split('').reverse().reduce((acc, curr) => {
  //   acc += (Math.pow(2, idx) * curr)
  //   idx++
  //   return acc
  // }, 0)

  let idx = 0;
  return binary.split('').reverse().reduce((acc, curr, idx) => {
    acc += (Math.pow(2, idx) * curr)
    // idx++
    return acc
  }, 0)
  

}

module.exports = binToDec;
