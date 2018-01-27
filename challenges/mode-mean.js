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
   const counter = {};
   const arr = array;
   arr.sort();

   const sum = arr.reduce((a, b) => a + b);

   const mean = Math.floor(sum / arr.length);

   // loop through sorted array and compare index to nextIndex
   for (let i = 1; i < arr.length; i += 1) {
     // keep track of longest run with counter
     if (arr[i] === arr[i - 1]) {
       if (!counter[arr[i]]) counter[arr[i]] = 1;
       else counter[arr[i]] += 1;
     }
   }
   // get keys
   const keys = Object.keys(counter);

   let mode = keys[0];

   for (let i = 1; i < keys.length; i += 1) {
     if (keys.length === 1) break;
     if (counter[keys[i]] > counter[keys[i - 1]]) {
       mode = keys[i];
     }
     if (counter[keys[i]] === counter[keys[i - 1]]) {
       mode = Math.max(keys[i], keys[i - 1]);
     }
   }

   mode = parseInt(mode)

   if (mean === mode) return true;
   return false;
 }

module.exports = modemean;
