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
function uniqueNumber(array) {
  const obj = {};
  for (let i = 0; i < array.length; i++) {
    if (obj[array[i]]) obj[array[i]]++;
    else obj[array[i]] = 1;
  }
  for (let key in obj) {
    if (obj[key] === 1) return parseInt(key);
  }
  return 'no unique number';
}

//for O(1) space can do nested for loop, but for O(n) time not sure currently

module.exports = uniqueNumber;
