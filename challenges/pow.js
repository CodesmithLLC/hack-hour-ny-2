/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power, result = 1) {
  return (power) ? pow(base, power - 1, result * base) : result;
}

module.exports = pow;
