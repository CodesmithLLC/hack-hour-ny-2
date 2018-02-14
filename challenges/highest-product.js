/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
	if(array.length < 3 || !Array.isArray(array)) return 0; 
	let max = [];
	let temp;
	while(max.length < 3){
		if(Math.abs(Math.min(...array)) > Math.max(...array)){
		  temp = Math.abs(Math.min(...array))
			max.push(temp)
			array.splice(array.indexOf(temp), 1)
		} else {
		  temp = Math.max(...array)
		  array.splice(array.indexOf(temp), 1)
			max.push(temp)
		}
	}
  return max.reduce((a, b) => {return a * b})
}


module.exports = highestProduct;
