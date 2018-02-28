/*  Given an array of numbers and a target number, return true if there are two numbers in the
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  if(arr.length < 2){
    return false;
  }

  return arr.includes(n - arr[0]) || twoSum(arr.slice(1), n);
}

// console.log(twoSum([1, 2, 3, 4, 5], 5))
module.exports = twoSum;
