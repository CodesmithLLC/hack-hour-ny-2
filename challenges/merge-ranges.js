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
  let sortedArr = array.sort((a, b) => {
    return a[0] - b[0];
  });
  let j = 0;
  const result = [array[j]];
  for (let i = 1; i < array.length; i++) {
    if (array[i][0] <= array[i - 1][1]) {
      result[j] = [array[i - 1][0], array[i][1]];
    }
    else {
      j++;
      result.push(array[i]);
    }
  }
  return result;
}

module.exports = mergeRanges;
