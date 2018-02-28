/*  Given an array of numbers and a target number, return true if there are two numbers in the
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  const obj = {};
  for (let i=0; i < arr.length; i++) {
    if (obj[arr[i]]) return true;
    obj[n-arr[i]] = arr[i];
  }
  return false;
}

module.exports = twoSum;
