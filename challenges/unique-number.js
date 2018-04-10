/**
 * Write a function that will take an array of integers, all of which will appear exactly twice,
 * except for one integer that will appear exactly once. Return the integer that appears once.
 *
 * uniqueNumber([1,2,1,3,3]); -> 2
 *
 * BONUS:
 * Complete the challenge in O(n) time
 * Complete the challenge in O(1) space
 *
 */
// function uniqueNumber(array) {
//   let buffer = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     buffer = buffer ^ arr[i]
//   }
//   return buffer;
// }

function uniqueNumber(array) {
  const record = Object.keys(array.reduce((obj, num) => {
    if (obj[num]) {
      delete obj[num];
    }
    else {
      obj[num] = true;
    }
    return obj;
  }, {}));

  if (record.length) {
    return record[0];
  }
  return;
}

console.log(uniqueNumber([1, 2, 1, 3, 3]));

module.exports = uniqueNumber;
