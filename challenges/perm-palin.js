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

// function palindrome(str) {
//  	return str.split('').reverse().join('') === str;
// }

function permPalin(str) {
  // another option is checking if there are an either even amout of all letters with
	// one odd amount or just even amout of each letter

  // build an object that counts all the letters
  // check the object to see if every letter has an even amount
	// or and even amount with only one odd amount
	function letterObj(str) {
		let counter = {};
		for (let i = 0; i < str.length; i++) {
			if (counter.hasOwnProperty(str[i])) {
				counter[str[i]]++;
			} else (
				counter[str[i]] = 1;
			)
		}
		return counter;
	}

	const counter = letterObj(str);
	let odds = 0;
	let evens = 0;
// prob dont even need evens
	for (let key in counter) {
		if (counter[key] % 2 === 0) {
			evens++;
		} else if (counter[key] % 2 === 1) {
			odds++;
		}
	}
	return odds === 1 || odds === 0;
}

module.exports = permPalin;
