/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  // divide both numbers with each number and find the greatest number that divides it?
  let smaller;
  a > b ? smaller = b : smaller = a;
  let divisor = 1;

  for(let i = 0; i <= smaller; i++) {
    if (a % i === 0 && b % i === 0 && i > divisor) {
      divisor = i;
    }
  }
  return divisor;
}

module.exports = gcd;