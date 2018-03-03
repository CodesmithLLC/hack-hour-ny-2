/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
	let divisor = a > b ? b : a;
	let found = false;
	while (divisor > 1 && !found){
		if (a%divisor === 0 && b%divisor === 0)
			found = true;
		if (!found) divisor--;
	}
	return divisor;
}

// console.log(gcd(10,8))
// console.log(gcd(10,9))
// console.log(gcd(10,5))
// console.log(gcd(40,100))

module.exports = gcd;