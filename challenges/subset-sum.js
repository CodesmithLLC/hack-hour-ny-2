/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

function subsetSum(array, target) {
	// inputs: array of nums, target num which is the sum of SOME integers contained in the array
	// output true if the target is met, false otherwise
	// sort array in descending order
	let end = array.length,
			sum = 0,
			temp;

	for (let j = 0; j < array.length; j++) {
		for (let i = 1; i < end; i++) {
			if (array[i - 1] < array[i]) {
				temp = array[i - 1];
				array[i - 1] = array[i];
				array[i] = temp;
			}
		}
		end -= 1;
	}

	console.log(array)

	// reduce to true or false
	return array.reduce((bool, num) => {
		console.log('num',num)
		if (num + sum <= target) {
			console.log('sum',sum)
			sum += num;
			return true;
		} else {
			return false;
		}
	}, false)
}

console.log(subsetSum([8, 2, 4, 12], 13));

module.exports = subsetSum;


