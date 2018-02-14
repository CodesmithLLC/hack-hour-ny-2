/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function sortArray(array) {     
  for (var i = 0; i < array.length; i += 1) {
    for (var j = i + 1; j < array.length; j += 1) {
      if (array[j] < array[i]) {
        const temp = array[i]
        array[i] = array[j]
        array[j] = temp
      }
    }
  }
  return array;
}



function highestProduct(array) {
  if (array.length < 3 || !Array.isArray(array)) return 0;
  const sorted = sortArray(array);
  let product = 1;
  for (i = sorted.length - 1; i >= sorted.length - 3; i -= 1) {
    console.log(sorted[i])
    product *= sorted[i]
  }
  return product
}


module.exports = highestProduct;
