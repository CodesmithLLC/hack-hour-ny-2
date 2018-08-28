/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */


const gcd = (a, b) => {
	let divisor = a > b ? b : a;
	while (divisor > 1){
		if (a%divisor === 0 && b%divisor === 0)
			return divisor;
		divisor--;
	}
	return 1;
}

// const gcd = (a, b, div = a > b ? b : a) => {
// 	if (!(a % div) && !(b % div)) return div;
// 	else return gcd(a, b, --div);
// }





// const gcd = (a, b, div = a > b ? b : a) => (!(a % div) && !(b % div)) ? div : gcd(a, b, --div);



// gcd (252, 105) = 21
// 			252 % 105 = 42
// gcd (105, 42) = 21
// 			105 % 42  = 21
// gcd (42, 21) = 21
// 			42 % 21 = 0


// const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);

console.log(gcd(10,8))
console.log(gcd(10,9))
console.log(gcd(10,5))
console.log(gcd(40,100))

module.exports = gcd;