/*  Given an array of numbers and a target number, return true if there are two numbers in the
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  // console.log(arr);
  if(arr.length < 2){
    return false;
  }

  const next = arr.slice(1);
  return next.includes(n - arr[0]) || twoSum(next, n);
}

// console.log(twoSum([1, 2, -3, 4, 5], 4))
module.exports = twoSum;
