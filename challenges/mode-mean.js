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
  let mean = 0;
  let trackNums = {};
  let maxCount = 1;
  let mode;
  for (let i = 0; i < array.length; i++) {
    if(trackNums[array[i]]) trackNums[array[i]]++;
    else trackNums[array[i]] = 1;
    mean += array[i];
    if (trackNums[array[i]] > maxCount) maxCount = trackNums[array[i]];
  }
  mode = array.
    filter((key) => {
      return trackNums[key] === maxCount;
    }).
    reduce((acc,curr) => {
      return Math.max(acc, curr);
    }, 0);
  mean = Math.floor(mean/array.length);
  if (mode === mean) return true;
  return false;
}

module.exports = modemean;
