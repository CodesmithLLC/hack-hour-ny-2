/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  let len = array.length;
  if (len < 3) return 0;
  
  array.sort((a,b) => a - b);
  
  return Math.max(
    array[0] * array[1] * array[len-1], 
    array[len-3] * array[len-2] * array[len-1]
    )

}

console.log(highestProduct([-5, 2, 0, 10, 4, -3]));
module.exports = highestProduct;
