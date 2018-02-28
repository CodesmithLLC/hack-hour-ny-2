/*  Given an array of numbers and a target number, return true if there are two numbers in the
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  // subtract two numbers from the target, if it ever equals zero return true
  // subtract one number from the target, if the remainder of the target exists in the array return true
  for (let i = 0; i < arr.length; i++) {
    let currentDiff = n - arr[i];
    if (arr.includes(currentDiff)) {
      return true;
    }
  }
  return false;
}

module.exports = twoSum;
