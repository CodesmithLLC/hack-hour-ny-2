/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  let largest = a <= b ? b : a
  let smallest = a <= b ? a : b
  if(largest % smallest === 0) return smallest
	let gcd;
	for(let i = 1; i < largest; i++) {
		if(a % i === 0 && b % i === 0) {
			gcd = i
		}
	}
	return gcd
}

module.exports = gcd;