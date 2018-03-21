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

  arr.reverse();

  const backward = arr.slice(1).reduce((newArr, num) => {
    newArr.push(newArr[newArr.length - 1] + num);
    return newArr;
  }, [arr[0]]);

  console.log(forward, backward);

  let result = forward[0];
  forward.forEach((sum, i) => {
    const other = Math.max(...forward.slice(0, i + 1)) - Math.min(0, ...backward.slice(i));
    console.log(other);
    result = Math.max(result, other)
  })

  return result;
}

console.log(maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]));

module.exports = maxSubarray;
