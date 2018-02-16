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
  let sum = 0;
  const freq = {};
  for (let num of array) {
    sum += num;
    freq.hasOwnProperty(num) ? freq[num]+=1 : freq[num]=0;
  }
  const mean = Math.floor(sum/array.length);
  let mode = array[0];
  let frequence = 1;   
  for (let number in freq) {
    if (freq[number] > frequence && Number(number)>mode) {
      mode = Number(number);
      frequence = freq[number];
    }
  }
  return mode === mean;
}

module.exports = modemean;
