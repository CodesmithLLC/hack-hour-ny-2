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
	let cache = {};
	for(let i = 0; i < str.length; i++){
		cache[str[i]] === undefined ?
			cache[str[i]] = 1
		:
			cache[str[i]] += 1
	}

	return Object.keys(cache)
				.filter((el) => { 
					return cache[el] % 2 !== 0
				}).length >= 2 ?
					false
				:
					true
}

module.exports = permPalin;