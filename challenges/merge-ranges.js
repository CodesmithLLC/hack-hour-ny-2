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

// var times = [[0, 1], [4, 8], [3, 5], [10, 12], [9, 10]];
// console.log(mergeRanges(times));

function mergeRanges(array) {
  const res = [];
  let rIdx = 0;
  let sArr = [...array].sort((a,b) => a[0] - b[0]);

  for(let i = 0; i < sArr.length; i++) {
    let low = sArr[i][0];
    let high = sArr[i][1];
    let el = res[rIdx] || [Number.Positive_INFINITY, Number.NEGATIVE_INFINITY];

    if(low >= el[0] && low <= el[1]) {
      if(high > el[1]) el[1] = high;
    }
    else if (!(high >= el[0] && high <= el[1]))
      res.push(sArr[i]);
      
    rIdx = res.length - 1;
  }

  return res;
}

module.exports = mergeRanges;