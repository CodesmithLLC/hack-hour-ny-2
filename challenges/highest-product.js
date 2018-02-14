/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  let max = 0;
  let subsets = powerSet(array);
  // console.log(subsets);
  subsets = drop(subsets, 3);
  // console.log(subsets);
  for (let ele of subsets) {
   const product = ele.reduce((acc, num) => acc *  num);
   if (product > max) max = product;
  }
  return max;
}

function powerSet(array) {
  let result = [[]];
  for (let ele of array) {
   for (let subset of result.slice(0)) {
     result.push(subset.concat(ele));
   }
  }
  result.shift();
  return result;
}


function drop(array, n) {
  let result = [];
  for (let ele of array) {
   if (ele.length === n) result.push(ele);
  }
  return result;
}

module.exports = highestProduct;
