/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function mult(arr) {
  return arr.reduce((product, num) => {
    return product * num;
  }, 1);
}

function highestProduct(array) {
  // keep track of two most negative numbers
  // keep track of the three most positive numbers
  if(!Array.isArray(array) || array.length < 3){
    return 0;
  }

  array.sort();
  const optionOne = [array[0], array[1], array[array.length - 1]];
  const optionTwo = [array[array.length - 3], array[array.length - 2], array[array.length - 1]];

  return Math.max(mult(optionOne), mult(optionTwo));
}

// console.log(highestProduct([1, 2, 3, -2, 0]))
// console.log(highestProduct([1, 2, 3, -2, -3]))

module.exports = highestProduct;
