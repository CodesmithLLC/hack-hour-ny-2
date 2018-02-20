/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(arr) {
  // special cases, if passed not an array or an array with fewer than 3 elements, return 0
  if (!Array.isArray(arr) || arr.length < 3) return 0;
  
  arr.sort((a, b) => a - b)
  console.log(arr)
  
  // multiply last 3 of sorted array
  let answer = arr[arr.length - 1] * arr[arr.length - 2] * arr[arr.length - 3];

  // if there are two negatives 
  if (arr[0] * arr[1] * arr[arr.length - 1] > answer) {
    answer = arr[0] * arr[1] * arr[arr.length - 1];
  }

  return answer;
}


module.exports = highestProduct;
