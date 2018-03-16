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
  let repeated, 
    count = {};
  
  array.forEach(el => {
    count[el] = count[el] ? count[el] + 1 : 1;
    if(count[el] == 2) repeated = el;
  });

  return repeated;
}

module.exports = repeatNumbers;
