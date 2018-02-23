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

function mergeArrays(arr1, arr2) {

	if (!arr1) return arr2;
	if (!arr2) return arr1;

	let merged = [];
	let i = 0;
	let j = 0;

	while (arr1.length > i && arr2.length > j){

		if (arr1[i] < arr2[j]){
			merged.push(arr1[i])
			i++;
		}
		else{
			merged.push(arr2[j])
			j++;
		}
	}

	if (arr1.length !== 0)
		return merged.concat(arr1.slice(i))
	else if (arr2.length !== 0)
		return merged.concat(arr2.slice(j))

	return merged;
}

// var my_array = [3,4,6,10,11,15,21];
// var another_array = [1,5,8,12,14,19];
//
// console.log(mergeArrays(my_array, another_array))

module.exports = mergeArrays;
