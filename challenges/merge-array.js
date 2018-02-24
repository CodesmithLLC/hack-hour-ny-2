/**
 * We have our lists of orders sorted numerically already, in arrays.
 * Write a function to merge our arrays of orders into one sorted array.
 * These may be of different lengths.
 *
 * var my_array = [3,4,6,10,11,15,21];
 * var another_array = [1,5,8,12,14,19];
 *
 * mergeArrays(my_array, another_array); -> [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]
 * 
 * BONUS: 
 * Complete in O(n) time  
 *
 */

function mergeArrays(arr1, arr2) {
  const result = [];
  let i = 0;
  let j = 0;
  while (arr1[i] || arr2[j]) {
    if (!arr2[j] || arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    }
    else {
      result.push(arr2[j]);
      j++;
    }
  }
  return result;
}

module.exports = mergeArrays;