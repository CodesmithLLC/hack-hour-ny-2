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
  if (array.length === 1) {
    return true;
  }

  let mode = null;
  let times = 0

  for (let i = 0; i < array.length; i += 1) {
    let count = 0;
    for (let j = 0; j < array.length; j += 1) {
      if (array[j] === array[i]) {
        count += 1
      }
    }
    if (count > times) {
      mode = array[i];
      times = count;
    }
  }
   
  let total = array.reduce((item, sum) => {return sum += item;}, 0)
  let mean = total / array.length;
  
  if (mean === mode ) {
    return true;
  }
  return false
}


module.exports = modemean;
