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
	// count times inbetween. 
	// make subarray
	// find min, keep counting up by 1 until time is not there. Make a new array. Then restart count. 
	let fullArr = Array.concat(...array)
	let min = 1000; 
			counter; 
	let newArr = []; 

	while(counter !== 13){
		for(let i = 0; i < array.length; i++){
			if(min > fullArr[i]){
				min = fullArr[i]
			}
		}

		if(fullArr.indexOf(min+1) > 0){
			max = min + 1 
		} else { 
			let subArr = [min,max]
			newArr.push(subArr); 
		}
	}


	// for(let i = 0; i < array.length; i++){
	// 	if(min > Math.min(...array[i])){
	// 		min = Math.min(...array[i])	
	// 		counter = min; 
	// 	}
	// }

	return newArr; 

}

module.exports = mergeRanges;
