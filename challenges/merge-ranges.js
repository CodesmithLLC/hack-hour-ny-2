/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an array of condensed ranges.
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */


function mergeRanges(array) {
  let result = [];
  for (let i = 0; i < array.length - 1; i++) {
    if (
    (Math.max.apply(null, array[i]) >= Math.min.apply(null, array[i+1]) && Math.max.apply(null, array[i]) < Math.max.apply(null, array[i+1])) || 
    (Math.max.apply(null, array[i+1]) >= Math.min.apply(null, array[i]) && Math.max.apply(null, array[i+1]) < Math.max.apply(null, array[i]))
    ) {
      let arr = array[i].concat(array[i+1]);
      result.push([Math.min.apply(null, arr), Math.max.apply(null, arr)]);
      i++
    } else {
      result.push(array[i]);
    }
  }
  return result;
}

module.exports = mergeRanges;


