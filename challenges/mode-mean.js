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
   const mean = findMean(array);
   const mode = findMode(array);
   return mean === mode;
 }

 function findMean(arr) {
   let sum = arr.reduce((total, num) => total + num);
   return Math.floor(sum / arr.length);
 }


 function findMode(arr) {
   let numCounts = {};
   for (let num of arr) {
     if (numCounts[num] === undefined) {
       numCounts[num] = 1;
     } else {
       numCounts[num]++;
     }
   }
   let max = 0;
   let value = 0;
   for (let key in numCounts) {
     if (numCounts[key] >= max) {
       max = numCounts[key];
       value = key;
     }
   }
   return value;
 }

module.exports = modemean;
