/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  const hash = {};

  for (let i of arr) {
    if (hash[i] === undefined) {
      hash[i] = i;
    }
    // else {
    //   hash[i] += 1;
    // }
  }

  for (let i of arr) {
    if (hash[n - i] && hash[n - i] !== i) {
      console.log(hash[n - i])
      return true
    }
  }
  return false;

}

module.exports = twoSum;
