/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  let max = Math.max(...array);
  array.splice(array.indexOf(max), 1);
  let nextMax = Math.max(...array)
  return max * nextMax
}

module.exports = highestProduct;
