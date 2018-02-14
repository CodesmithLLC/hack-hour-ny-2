/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (!array || array.length < 3) return false;
  let newArr = array.sort(function(a, b){
    return b - a;
  });
  let total = newArr[0] * newArr[1] * newArr[2];
  return total;
}


module.exports = highestProduct;
