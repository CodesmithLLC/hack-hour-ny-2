/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (!Array.isArray(array) || array.length < 3) return 0;
  let newArr = array.sort(function(a, b) {
    return b - a;
  });
  let negProduct = 1;
  let posProduct = 1;

  for (let i = newArr.length - 2; i >= 0; i--) {
    if (newArr[i] < 0 && newArr[i + 1] < 0) {
      negProduct *= newArr[i] * newArr[i + 1];
      break;
    }
  }
  if (negProduct > 1) negProduct *= newArr[0];
  posProduct *= array[0] * array[1] * array[2]
  return Math.max(negProduct, posProduct);
}




function highestProduct(array) {
  if (!array || array.length < 3) return 0;
  let newArr = array.sort(function(a, b){
    return b - a;
  });
  return total;
}


module.exports = highestProduct;
