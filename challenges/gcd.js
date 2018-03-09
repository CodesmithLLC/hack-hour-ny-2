/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 * gcd(6, 12) -> 6
 * gcd(10, 12) -> 2
 * gcd(6, 8) -> 2
 * gcd(12, 8) -> 4
 * gcd(11, 3) -> 1 
 * gcd(6, 9) -> 3 (divide smaller num in half)
 * gcd(15, 8) -> 1
 * gcd(5, 18) -> 1
 */

// The greatest common divisor of two or more integers, which are not all zero, is the largest positive integer that divides each of the integers


// Find an even number that has a gcd greater than 2 and is not equal to the smaller input
// gcd(12, 8) -> 4

// Find 2 odd nums that have a gcd greater than 1 and is not equal to the smaller input
// gcd(9, 15) -> 3

// Find even and odd nums that have a gcd greater than half of the smaller num


function gcd(a, b) {
	// greatest whole number that both a & b can be divided by
	if (a === 0) return b;
	if (b === 0) return a;

	// check if the larger num is divisible by the smaller num
	if (a % b === 0) return b;
	if (b % a === 0) return a;

	// sort nums so a = low and b = high
	if (a > b) {
		const temp = a;
		a = b;
		b = temp;
	}

	let divisor  = a;

	// both nums are odd or even
	if ((a % 2 === 0 && b % 2 === 0) || (a % 2 !== 0 && b % 2 !== 0)) {
		while (b % divisor !== 0) {
			divisor -= 2
		}
	} else {
		while (b % divisor !== 0) {
			divisor -= 1;
		}
	}

	return divisor;
}



module.exports = gcd;