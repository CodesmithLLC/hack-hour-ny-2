/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function mult(arr) {
  return arr.reduce((product, num) => {
    return product * num;
  }, 1);
}

function highestProduct(array) {
  array.sort();
  const optionOne = [array[0], array[1], array[array.length - 1]];
  const optionTwo = [array[array.length - 3], array[array.length - 2], array[array.length - 1]];

  return Math.max(mult(optionOne), mult(optionTwo));
  // keep track of two most negative numbers
  // keep track of the three most positive numbers
  // let min = [];
  // let max = [];
  //
  // array.forEach((num) => {
  //   let arr = (num > 0) ? max : min;
  //   let i = 0;
  //   while(arr){
  //
  //   }
  // });
  //
  // const top = max[2];
  // max.splice(2, 1);
  //
  // const product = (min.length === 2) ? Math.max(mult(min), mult(max)) : mult(max);
  // return product * top;
}

console.log(highestProduct([1, 2, 3, -2, 0]))
console.log(highestProduct([1, 2, 3, -2, -3]))

module.exports = highestProduct;
