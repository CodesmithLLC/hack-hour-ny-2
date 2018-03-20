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
  if (!array || array.length === 0) return;
  let max = array[0];
  let sum = array[0];
  for (let i=1; i<array.length; i++) {
    if (array[i] > max) max = array[i];
    sum += array[i];
  }
  return sum - (1+max)*(array.length-1)/2;
}

module.exports = repeatNumbers;
