/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  const start = Math.min(Math.abs(a), Math.abs(b));
  for(let i = start; i > 0; i--){
    if(a%i === 0 && b%i === 0){
      return i;
    }
  }
  return 1;
}

console.log(gcd(-10, 8));
console.log(gcd(10, 9));

module.exports = gcd;
