/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  let keepGoing = true;
  let divisor;
  if (a > b) {
    while (keepGoing) {
      divisor = a;
      if (a % divsor === 0 && b % divisor ===0) return divsor;
      if (divisor === 1) return 1;
      divisor--;
    }
  }
  if (a < b) {
    while (keepGoing) {
      divisor = b;
      if (b % divsor === 0 && a % divisor ===0) return divsor;
      if (divisor === 1) return 1;
      divisor--;
    }
  }
  if (a === b && a !== 0) return a;
}

module.exports = gcd;
