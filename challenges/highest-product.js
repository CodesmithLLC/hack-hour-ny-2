/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  // sort array
  // find the product of the biggest numbers
  if (!array) {
    return 0;
  }
  function sortArr(array) {
    return array.sort((a,b) {
      return b - a;
    });
  }
  let sorted = sortArr(array);
  let largest = sorted.slice(0, 3);
  return largest.reduce((acc, curr) => {
    return acc * curr;
  });
}


module.exports = highestProduct;
