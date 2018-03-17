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
  array.sort((a, b) => {
    return a[0] - b[0];
  })

  const result = [array[0]];

  for(let i = 1; i < array.length; i++){
    const prev = result[result.length - 1];
    const curr = array[i];
    if(prev[1] >= curr[0]){
      prev[1] = Math.max(curr[1], prev[1]);
    }
    else {
      result.push(curr);
    }
  }

  return result;
}

console.log(mergeRanges([[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]))

module.exports = mergeRanges;
