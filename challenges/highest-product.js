/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
	if(array.length < 3 || !Array.isArray(array)) return 0; 
	let max = [];
  for(let i = 0; i < 3; i++){
    let currMax = Math.max(...array);
    max.push(currMax)
    array.splice(array.indexOf(currMax), 1)
  }
  return max.reduce((a, b) => {return a * b})
}


module.exports = highestProduct;
