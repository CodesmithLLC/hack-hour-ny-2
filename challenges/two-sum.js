/*  Given an array of numbers and a target number, return true if there are two numbers in the
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  for (let i = 0; i < arr.length; i++) {
    // const num = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === n) return true;
    }
  }
  return false;
}

console.log(twoSum([1, 2, 3, 4, 3], 6)); // true
console.log(twoSum([0, 0, 0], 5)); // false
console.log(twoSum([-1, -3, -4], -7)); // true

module.exports = twoSum;
