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
  let expect = 0;

  const sum = array.reduce((total, num, i) => {
    if(i < array.length - 1){
      expect += (i + 1);
    }
    return total + num;
  }, 0);

  return sum - expect;
}

module.exports = repeatNumbers;
