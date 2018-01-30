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
  let obj = {};

  array.forEach(el => {
    if(!obj[el]){
      obj[el] = 1;
    } else {
      obj[el] += 1;
    }
  });
  console.log(obj);
  let mode = +Object.keys(obj).reduce((a, b) => obj[a] > obj[b] ? a : b);
  let mean = Math.floor(array.reduce((a, b) =>  a + b) / array.length);

  return mean === mode;
}

module.exports = modemean;
