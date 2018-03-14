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
	const record = str.split('').reduce((obj, letter) => {
		if(obj[letter]){
			delete obj[letter]
		}
		else {
			obj[letter] = true
		}
		return obj;
	}, {});
	return Object.keys(record).length <= 1;
}

// console.log(permPalin('abab')) //=> true
// console.log(permPalin('cbaba')) //=> true
// console.log(permPalin('cbac')) //=> false
// console.log(permPalin('a')) //=> true

module.exports = permPalin;
