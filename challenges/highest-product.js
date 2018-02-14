/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {

  if (array.length < 3 || array.constructor !== Array) {
    return 0;
  }

  // sorting the array
  array = array.sort((a, b) => (a - b));
  // get last 3 numbers (biggest numbers, or 'smallest' negative numbers)
  array = array.slice(array.length - 3)
  console.log(array)

  // just multiply to win??
  let result = array[0] * array[1] * array[2]
  return result
}


module.exports = highestProduct;
