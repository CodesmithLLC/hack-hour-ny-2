/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */


//for every elememt in arr im going to check the sum of that number when added to every other number 
//in arr, i will do this with a nested for loop, making sure to not add any element to itself.
// if i find an equality i will return true. if the loop finishes i will return false.

function twoSum(arr, n) {
	//let sumIsN = false;

	for (let i = 0; i < arr.length; i++){
		for (let j = 0; j < arr.length; j++){
			
				if (i !== j && arr[i] + arr[j] === n) return true;
			
		}
	}

	return false;
}

// const Arr = [1,2,3,4,5,6,5,7,8,9];

// console.log(twoSum(Arr, 20));

module.exports = twoSum;
