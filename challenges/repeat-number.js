/**
 * I have an array where every number in the range 1...n appears once except for
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time
 * Do this in O(1) space
 *
 */

function repeatNumbers(array) {
// brute idea - nested for loop on each item of array iterate through the rest of the array to find the double num
// second idea - make sure each num is one num apart, whichever isnt gets returned
  let repeat;
  array.forEach((num, idx) => {
    if (num - array[idx+1] === 0) {
      repeat = num;
    }
  });
  return repeat;
}

module.exports = repeatNumbers;
