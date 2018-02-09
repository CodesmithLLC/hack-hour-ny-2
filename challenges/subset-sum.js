/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 *
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

function subsetSum(array, target) {
  const result = subset(array);
  for (let arr of result) {
    const sum = arr.reduce((acc, num) => acc + num);
    if (sum === target) return true;
  }
  return false;
}

function subset(array) {
  let result = [[]];
  for (let ele of array) {
    for (let subset of result.slice(0)) {
      result.push(subset.concat(ele));
    }
  }
  result.shift();
  return result;
}

module.exports = subsetSum;
