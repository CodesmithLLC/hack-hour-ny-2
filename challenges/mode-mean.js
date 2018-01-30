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
  let modeObj = {};
  let mode = array[0];
  let sum = 0;

  array.forEach((num, i) => {
    sum += num;

    // keep track of number occurences
    if(modeObj[num]){
      modeObj[num] += 1;
    }
    else {
      modeObj[num] = 1;
    }

    // update mode
    if(modeObj[num] > modeObj[mode]){
      mode = num;
    }
    else if(modeObj[num] === modeObj[mode]){
      mode = Math.max(mode, num);
    }
  });

  return Math.floor(sum / array.length) === mode;
}

// modemean([1, 2, 3, 3, 4, 5, 5])

module.exports = modemean;
