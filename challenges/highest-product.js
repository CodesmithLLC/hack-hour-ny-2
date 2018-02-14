/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
 // sort and to get highest integers
 const highNums = array.sort((n1, n2) => {
 	return n1 - n2;
 }).slice(array.length - 3);
 let f1 = '';
 // concact the second highest and third highest to get the largest num
 if (highNums[1].toString().length === 1) {
 	f1 = parseInt(highNums[1].toString() + highNums[0].toString());
 } else {
 	f1 = parseInt(highNums[0].toString() + highNums[1].toString());
 } 

 // multiple above number by highest
 return f1 * highNums[2];
}


module.exports = highestProduct;
