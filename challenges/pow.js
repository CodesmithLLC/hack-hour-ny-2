/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

// function pow(base, power) {
// 	if (power === 0) return 1;
// 	if (power === 1) return base;
// 	return base * pow(base, power-1)
// }


function pow(base, power, total = 1) {
  if (base === 0) return 0;
  if (base === 1) return 1;
  if (power === 0) return total;
  if (power === 1) return total*base;
  //recursive call
  return pow(base, power-1, total*base)
}

module.exports = pow;
