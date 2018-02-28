/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  for (let i = 0; i < arr.length - 1; i += 1) {
    for (let j = i + 1; j < arr.length - 1; j += 1) {
      if (arr[j] + arr[i] === n) {
        return true ;
      }
    }
  }
  return false;
}

module.exports = twoSum;





