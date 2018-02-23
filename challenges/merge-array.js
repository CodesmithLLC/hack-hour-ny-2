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
  const len1 = arr1.length;
  const len2 = arr2.length;
  // let arr3 = new Array(len1 + len2);
  // let arr3 = [...Array(len1+len2)];
  let arr3 = [];
  // while (i < len1) {
  
  //   }
  // }
  let i, j, k = 0;

  while (i < len1 && j < len2) {
    if(arr1[i] < arr2[j]) {
      // arr3.push(arr1[i++]);
      arr3[k++] = arr1[i++];
    }
    // else arr3.push(arr2[j++])
    else {
      arr3[k++] = arr2[j++];
    }
    
  }
  while (i < len1) {
    // arr3.push(arr1[i++]);
    arr3[k++] = arr1[i++];

  }
  while (j < len2) {
    // arr3.push(arr2[j++]);
    arr3[k++] = arr2[j++];

  }
  // just concat and sort that?
  // arr1.concat(arr2);
  // arr.sort((a, b) => a - b);
  return arr3;
}

module.exports = mergeArrays;
