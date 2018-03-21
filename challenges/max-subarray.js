/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
  if(arr.length < 4){
    return;
  }

  let sub = arr[0];
  let total = arr.slice(0, 4).reduce((sum, num) => { return sum + num; });

  for(let i = 4; i < arr.length; i++){
    const add = arr[i];
    const newNum = total + add - sub;

    if(newNum >= total){
      total = newNum;
      sub = arr[i - 3];
      console.log(arr[i], total, sub);
    }
  }

  return total;
}

console.log(maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]));

module.exports = maxSubarray;
