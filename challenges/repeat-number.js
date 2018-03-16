/**
 * I have an array where every number in the range 1...n appears once except for 
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time
 * Do this in O(1) space
 *
 */

function repeatNumbers(array) {
	let obj = {}; 
	let holder; 

	for(let i = 0; i < array.length; i++){
		if(obj[array[i]])
			obj[array[i]]++
		else{
			obj[array[i]] = 1; 
		} 
	}

	for(let key in obj{
		if obj[key] >= 2
			holder = key
	})

	return holder; 
	// not 0(n) or 0(1). Going to go work on our production project...
}

module.exports = repeatNumbers;
