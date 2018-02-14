/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {

  // if (array.length < 3 || array.constructor !== Array) {
  //   return 0;
  // }
  if (array.length < 3) return 0;
  if (array.constructor !== Array) return 0;
  
  // sorting the array
  array = array.sort((a, b) => (a - b));
  // get last 3 numbers (biggest numbers, or 'smallest' negative numbers)

  let len = array.length;
  let numsToMult = [];
  console.log(array[len - 3])
  if (array[len - 3] < 0 && array[len - 2] < 0) {
    numsToMult.push(array[0], array[1], array[len - 1]);

  }
  else {
    numsToMult = array.slice(len - 3)
  }
  // numsToMult = array.slice(len-3)

  console.log(numsToMult)


  // just multiply to win??
  let result = numsToMult[0] * numsToMult[1] * numsToMult[2]
  return result
}


module.exports = highestProduct;
