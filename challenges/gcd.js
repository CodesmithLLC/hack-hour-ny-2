/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */


// brute force solution. As loop increments, the divisor is overwritten by next highest i. 

function gcd(a, b) {
	let divisor; 
	let max = Math.max(a,b)

	for(i = 0; i < max; i++){
		if(a % i === 0 && b % i === 0)
			divisor = i; 
		}
	}

	return divisor;
}

module.exports = gcd;