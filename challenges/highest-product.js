/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
	// sort the array in ascending order
	array = array.sort((a, b) => {
		return a - b;
	})

	console.log(array);

	// compare the multiplication of the last three integers
	// with the mult of the first two adn the last integer (to account for potential negative integers)
	const last = array.length - 1;
	const productLastThree = array[last] * array[last - 1] * array[last - 2];
	const productOneTwoLast = array[0] * array[1] * array[last];
	
	return productLastThree > productOneTwoLast ? productLastThree : productOneTwoLast;
}

// const getAllSubsets = array => 
// 	array.reduce(
// 	  (subsets, value) => subsets.concat(
// 	   subsets.map(set => [value,...set])
// 	  ),[[]]
// );

// console.log(getAllSubsets([1,2,3]));

// Original code
	// // sort and to get highest integers
	// const highNums = array.sort((n1, n2) => {
	// 	return n1 - n2;
	// }).slice(array.length - 3);
	// let f1 = '';
	// // concact the second highest and third highest to get the largest num
	// if (highNums[1].toString().length === 1) {
	// 	f1 = parseInt(highNums[1].toString() + highNums[0].toString());
	// } else {
	// 	f1 = parseInt(highNums[0].toString() + highNums[1].toString());
	// } 

	// // multiple above number by highest
	// return f1 * highNums[2];

module.exports = highestProduct;
