/* eslint-disable*/

/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */


function modemean(array) {
  var total = array.reduce( function(prev, cur) {
   return prev + cur;
 }, 0);
  var mean = Math.floor(total / array.length);

  var mode;
  var storage = {};
  for (let i of array) {
    // storing the number of times each number occurs in the array
    if (storage[i] === undefined) {
      storage[i] = 1;
    } else {
      storage[i] += 1;
    }

    // setting mode using the above storage
    if(!mode) {
      mode = i;   // mode set to a number
    }
    if(storage[i] > storage[mode]) { // reset mode if another number has more occurences
      mode = i;
    } else if (storage[i] === storage[mode]) {
      if()
    }
  }

  return mean === mode;
}

module.exports = modemean;
