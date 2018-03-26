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

  var result = [], last;

  array = array.sort((a,b) => { return a[0] > b[0]; })

  array.forEach(function (r) {
    if (!last || r[0] > last[1])
      result.push(last = r);
    else if (r[1] > last[1])
      last[1] = r[1];
  });

  return result;



  // // copy and sort the array
  // var result = array.slice().sort(function (a, b) {
  //   return a[0] > b[0];
  // }),
  //   i = 0;

  // while (i < result.length - 1) {
  //   var current = result[i],
  //     next = result[i + 1];

  //   // check if there is an overlapping
  //   if (current[1] >= next[0]) {
  //     current[1] = Math.max(current[1], next[1]);
  //     // remove next
  //     result.splice(i + 1, 1);
  //   } else {
  //     // move to next
  //     i++;
  //   }
  // }
  // return result;


  
  array.sort(function (a, b) {
    return a[0] - b[0];
  });
  var result = [array[0]];

  for (var i = 1; i < array.length; i++) {
    var curr = array[i];
    var last = result[result.length - 1];

    if (curr[0] > last[1]) {
      result.push(curr);
    } else if (curr[1] > last[1]) {
      last[1] = curr[1];
    }
  }
  return result;

  
}

module.exports = mergeRanges;
