/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power, counter = 1, result = 1) {  
  // edge cases: negative, 0  
  if (power === 0) return result;
  
  if (counter === 1) {
    result = base * base;
    counter++;
    return pow(base, power, counter, result);
  }

  if (counter < power) {
      result = result * base;
      counter++
      return pow(base, power, counter, result);
  }
  
  if (counter === power) return result;
  if (base < 0) return result * -1;  
}

module.exports = pow;
