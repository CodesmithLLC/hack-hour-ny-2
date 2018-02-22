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
// BASICALLY MERGE SORT BIHHH, except no need to build a helper functon that sorts the two arrays
// oh wait .. is this actually the helper function that merges the two arrays at the end???
// YESSSSSS
function mergeArrays(arr1, arr2) {
  // create empty array
  // grab the first value of each array
  // iterate by whether each first item still exists
  // compare the first items
  // shift off smallest item and save to the beginning of the created array
  // when while loop breaks add the rest of the items to the end of the created array
  const merged = [];
  while (arr1[0] && arr2[0]) {
    if (arr1[0] < arr2[0]) {
      merged.push(arr1.unshift());
    } else if (arr2[0] < arr1[0]) {
      merged.push(arr2.unshift());
    } else {
      merged.push(arr1.unshift());
      merged.push(arr2.unshift());
    }
  }
  return merged.concat(arr1, arr2);
}

module.exports = mergeArrays;
