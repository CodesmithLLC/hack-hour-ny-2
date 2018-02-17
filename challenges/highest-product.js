/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(arr) {
  // special cases, if passed not an array or an array with fewer than 3 elements, return 0
  if(!arr || arr.length < 3) return 0;

  arr.sort((a,b) => a-b)

}


module.exports = highestProduct;
