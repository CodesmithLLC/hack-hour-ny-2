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
  let ranges = {}
  for (let i = 0; i < array.length; i += 1) {
    console.log(ranges)
    if ((array[i][0] - 1) in ranges) {
      ranges[array[i][0] - 1] = array[i][1]
    }
    else if ((array[i][0] + 1) in ranges) {
      ranges[array[i][0]] = ranges[array[i][0] + 1]
      delete ranges[array[i][0] + 1]
    }
    else {
      ranges[array[i][0]] = array[i][1]
    }
  }
  let newRanges = []
  for (let key in ranges) {
    let range = []
    range.push(key)
    range.push(ranges[key])
    newRanges.push(range)
  }
  return newRanges
}

module.exports = mergeRanges;
