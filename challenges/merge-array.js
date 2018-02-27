/**
 * We have our lists of orders sorted numerically already, in arrays.
 * Write a functin to merge our arrays of orders into one sorted array.
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
let merged = [];
  let idx1 = 0;
  let idx2 = 0;
  while(merged.length < arr1.length + arr2.length){
    if(idx1 < arr1.length){
      if(idx2 < arr2.length){
        if(arr1[idx1] < arr2[idx2]){
          merged.push(arr1[idx1]);
          idx1++;
        } else {
          merged.push(arr2[idx2]);
          idx2++;
        }
      } else {
        merged = merged.concat(arr1.slice(idx1));
      }
    } else {
      merged = merged.concat(arr2.slice(idx2));
    }
  }
  return merged
}


module.exports = mergeArrays;
