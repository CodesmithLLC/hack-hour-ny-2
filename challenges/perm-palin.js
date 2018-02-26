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
// if even then make sure each letter has a copy
// if odd then make sure that there is only one letter that doesn't have a copy



function permPalin(str) {
	let letters = str.split('');
	if (letters.length === 1) {
		return digits;
	}
	const allPermutations = [];
	for (let i = 0; i < letters.length; i++) {
		const lettersCopy = letters.slice(0);
		const fixedLetter = lettersCopy.splice(i, 1);
		const recursivePermutations = permute(lettersCopy);
		for (let j = 0; j < recursivePermutations.length; j++) {
			const recursivePermutation = recursivePermutations[j];
			allPermutations.push(fixedDigit.concat(recursivePermutation));
		}
	}
	return allPermutations;
}

function isPalindrome() {

}

module.exports = permPalin;
