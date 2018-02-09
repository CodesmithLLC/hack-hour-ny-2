/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 *
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

 function subsetSum(array, target) {
   const n = array.length;
   const b = Math.pow(2,n)-1;
   for (let i=1; i<=b; i++) {
     const combination = i.toString(2).split('');
     if (sumSubArr(array, combination) === target) return true;
   }
   return false;

 }

function sumSubArr(array, combination) {
   let idx = array.length-1;
   let sum = 0;
   for (let j = combination.length-1; j>=0 ; j--) {
     sum += array[idx] * Number(combination[j]);
     idx--;
   }
   return sum;
 }





module.exports = subsetSum;
