/**
 * We have our lists of orders sorted numerically already, in arrays.
 * Write a functin to merge our arrays of orders into one sorted array.
 * These may be of different lengths.
 *
 * var my_array = [3,4,6,10,11,15,21];
 * var another_array = [1,5,8,12,14,19];
 *
 * mergeArrays(my_array, another_array); -> [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]
 *
 * BONUS:
 * Complete in O(n) time
 *
 */

// function mergeArrays(array1, array2) {
//   return array1.concat(array2).sort(function(a, b) {
//     return a > b;
//   });
// }


function mergeArrays(a1, a2){

	const res = [];
	let i = 0, j = 0;

	while (i < a1.length && j < a2.length) {

		a1[i] < a2[j] ? res.push(a1[i++]) : res.push(a2[j++]); 
	}

	if (i < a1.length) return res.concat(a1.slice(i));
	else if (j < a2.length) return res.concat(a2.slice(j));

	return res;
}




var my_array = [3,4,6,10,11,15,21];
var another_array = [1,5,8];

console.log(mergeArrays(my_array, another_array))

module.exports = mergeArrays;
