/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

// console.log(maxSubarray([15, 20, -5, 10]));

function maxSubarray(arr, max = 0) {
  if(arr.length === 0) return max;

  let tempMax = arr.reduce((acc, curr) => {return acc + curr}, 0);

  max = tempMax > max ? tempMax : max;

  return maxSubarray(arr.slice(1), max) < maxSubarray(arr.slice(0, arr.length - 2), max) ? maxSubarray(arr.slice(0, arr.length - 2), max) : maxSubarray(arr.slice(1), max);
}

module.exports = maxSubarray;
