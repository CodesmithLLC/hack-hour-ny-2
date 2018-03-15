/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 */

function permPalin(str) {
	// find a combination
	// check if its a palindrome
	// ^ brute force

	// below is smarter approach
	// two of the same letter 
	// at most 1 that is not the same
	// throw all keys into a object. If there is more than 1 with only 1 key, not a palindrome
	// make a counter variable to keep track of key. If counter > 1, return false. 

	let objHolder = {}; 
	let counter = 0;

	for(let i = 0; i < str.length; i++){
		if(objHolder[str[i]])
			objHolder[str[i]]++
		else
			objHolder[str[i]] = 1; 
	}

	for (let key in objHolder){
		if(objHolder[key] === 1)
			counter++
	}

	if(counter > 1) 
	return false
	
	return true; 
}

module.exports = permPalin;