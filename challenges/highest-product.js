/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

 function highestProduct(array) {
   if (array.length === 0) return 0;
   if (lessThanThreeNumbers(array)) return 0;
   if (!Array.isArray(array)) return 0;
   let max = Number.NEGATIVE_INFINITY;
   let subsets = powerSet(array);
   subsets = drop(subsets, 3);
   for (let ele of subsets) {
    const product = ele.reduce((acc, num) => acc *  num);
    if (product > max) max = product;
   }
   return max;
 }

 function lessThanThreeNumbers(arr) {
   let count = 0;
   for (let i = 0; i < arr.length; i++) {
     if (typeof(arr[i]) === 'number') count++;
   }
   if (count < 3) return true;
   return false;
 }

 function powerSet(array) {
   let result = [[]];
   for (let ele of array) {
    for (let subset of result.slice(0)) {
      result.push(subset.concat(ele));
    }
   }
   result.shift();
   return result;
 }


 function drop(array, n) {
   let result = [];
   for (let ele of array) {
    if (ele.length === n) result.push(ele);
   }
   return result;
 }

module.exports = highestProduct;
