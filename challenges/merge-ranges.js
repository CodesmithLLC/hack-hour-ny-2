/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an array of condensed ranges.
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */


 function mergeRanges(arr) {
   const result = [];
   result.push(arr[0]);
   for (let i=1; i<arr.length; i++) {
     let contains = false;
     for (let j=1; j<result.length; j++) {
       if (arr[i][0] >= result[j][0] && arr[i][1] <= result[j][1]) {
         contains = true;
         break;
       }
       if (arr[i][0] <= result[j][0] && arr[i][1] >= result[j][1]) {
         contains = true;
         result[j][0] = arr[i][0];
         result[j][1] = arr[i][1];
         break;
       }
       if (arr[i][0] < result[j][0] && arr[i][1] < result[j][1] && arr[i][1] >= result[j][0]) {
         contains = true;
         result[j][0] = arr[i][0];
         break;
       }
       if (arr[i][0] > result[j][0] && arr[i][1] > result[j][1] && arr[i][0] <= result[j][1]) {
         contains = true;
         result[j][1] = arr[i][1];
         break;
       }
     }
     if (!contains) result.push(arr[i]);
   }
   return result;
 }


module.exports = mergeRanges;
