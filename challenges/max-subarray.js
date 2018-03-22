/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
  const forward = arr.slice(1).reduce((newArr, num) => {
    newArr.push(newArr[newArr.length - 1] + num);
    return newArr;
  }, [arr[0]]);

  let result = arr[0];

  for(let i = 1; i < forward.length; i++){
    result = Math.max(result, forward[i]);
    for(let j = 0; j < i; j++){
      result = Math.max(result, forward[i] - forward[j]);
    }
  }

  return result;
}

module.exports = maxSubarray;
