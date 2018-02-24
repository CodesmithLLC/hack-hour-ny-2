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
	const count = {};
	let l = str.length;
	for (let i=0; i<l; i++) {
		if(!count[str[i]]) {
			count[str[i]] = 1;
		} else {
			count[str[i]]++;
		}
	}
	let check = 0;
	for (let letter in count) {
		if (count[letter] % 2 === 1) check++;
		if (check > 0 && l % 2 === 0 ) return false;
		if (check > 1 && l % 2 === 1)	return false;
	}
	return true;
}

module.exports = permPalin;
