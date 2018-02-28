/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
	// inputs: 
		// array of itegers - consider negatives and zeros
		// n = target
	// output: boolean 

	let remainder;
	// iterate thru nums in array
	for (let i = 0; i < arr.length - 1; i++) {
		// a num has to be less than the target to be considered 
		if (arr[i] < n) {
			// if less than caculate target minus the num
			remainder = n - arr[i];
			// check if array contains the remainder > return true
			if (arr.includes(remainder)) return true;
		}
	}

	return false;
}

module.exports = twoSum;
