/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
  
  if (arr.length === 1) return arr[0]
  let maxSum = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = i + 1; j < arr.length; j += 1) {
      let sum = arr[i]
      for (let h = i + 1; h <= j; h += 1) {
        sum += arr[h]
      }
      if (sum > maxSum) maxSum = sum
    }
  }
  return maxSum
}

module.exports = maxSubarray;
