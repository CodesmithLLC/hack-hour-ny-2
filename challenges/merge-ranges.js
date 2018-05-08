/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an array of condensed ranges.
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */


function mergeRanges(array) {
	const merged = []

	array.sort((a, b) => a[0] - b[0]);

	//console.log(array)
	for (let i = 0; i < array.length ; i++){
		let r1 = array[i];
		for (let j = i+1; j < array.length; j++){
			let r2 = array[j];
			
			if (r1[1] >= r2[0] && r1[0] <= r2[0])
				merged.push([r1[0], r2[1]]);

			else if (r1[0] >= r2[0] && r1[1] <= r2[1])
				merged.push(r2)

			// else 
			// 	merged.push(r1) 
		}
	}
	return merged;
}


var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10], [20, 21]]

console.log(mergeRanges(times))

module.exports = mergeRanges;
