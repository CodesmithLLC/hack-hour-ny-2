/**
 * We have our lists of orders sorted numerically already, in arrays.
 * Write a functin to merge our arrays of orders into one sorted array.
 * These may be of different lengths.
 *
 * EXAMPLE 1
 * var my_array = [3,4,6,10,11,15,21];
 * var another_array = [1,5,8,12,14,19];
 * mergeArrays(my_array, another_array); -> [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]
 *
 * EXAMPLE 2
 * var my_array = [3,4,6,10,11,21];
 * var another_array = [1,5,8,12,14,15,19];
 * mergeArrays(my_array, another_array); -> [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]
 * 
 * BONUS: 
 * Complete in O(n) time  
 *
 */

function mergeArrays(arr1, arr2) {
	// inputs: sorts arrays
	// output: single sorted array (merged from both inputs)
	// create empty array to place values?
	let result = [];

	// iterate through length of longer array
	let arrayToIterate = arr1.length > arr2.length ? arr1 : arr2;

	// compare indexes of each array
	for (let i = 0; i < arrayToIterate.length; i ++) {
		// check values of arrays at same index
		// compare: is num1 > num2
		let smaller = arr2[i] > arr1[i] ? arr1[i] : arr2[i];
		let larger = arr2[i] > arr1[i] ? arr2[i] : arr1[i];
		console.log('smaller', smaller)
		console.log('larger', larger)

		// if (!result.length) {
		// 	result.push(arr[i]);
		// 	result.push(arr2[i]);
		// } else {
		// 	if ()
		// }
	}
	// push to new array OR splice num into iterable array
	// if pushing to new array check if first value you want to push is less than last value in result array
	// if yes open a while loop to continously check last value of result array (decrement iterator)
}
var my_array = [3,4,6,10,11,21];
var another_array = [1,5,8,12,14,15,19];
mergeArrays(my_array, another_array); // -> [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]

	// compare indexes of each array
	// for (let i = 0; i < arrayToIterate.length; i ++) {
	// 	// check values of arrays at same index
	// 	// compare: is num1 > num2
	// 	let smaller = arr2[i] > arr1[i] ? arr1[i] : arr2[i];
	// 	let larger = arr2[i] > arr1[i] ? arr2[i] : arr1[i];
	// 	console.log('smaller', smaller)
	// 	console.log('larger', larger)

	// 	// if (!result.length) {
	// 	// 	result.push(arr[i]);
	// 	// 	result.push(arr2[i]);
	// 	// } else {
	// 	// 	if ()
	// 	// }

	// }

module.exports = mergeArrays;
