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

var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]];
mergeRanges(times);

function mergeRanges(array) {
  const res = [];

  for(let i = 0; i < array.length; i++) {
    let reset = 0;
    let low = array[i][0];
    let high = array[i][1];
    res.forEach((el, i) => {
      if(low >= el[0] && low <= el[1]) {
        if(high > el[1]) el[1] = high;
        reset = 1;
      }
      else if (high >= el[0] && high <= el[1]) {
        if (low < el[0]) el[0] = low;
        reset = 1;
      } 
    });

    if(!reset) res.push(array[i]);
  }

  return res;
}

module.exports = mergeRanges;