/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  let i = 1;
  let result = 1;
  while (i<a && i<b) {
    i++;
    if (a%i===0 && b%i===0) result = i;
  }
  return result;
}

module.exports = gcd;
