/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power, num = 1) {
  if(power > 0){
    return pow(base, power - 1, num * base);
  }
  if(power < 0){
    return pow(base, power + 1, num / base)
  }
  return num;
}

// console.log(pow(2, -2));
// console.log(pow(2, 0));
// console.log(pow(2, 3));

module.exports = pow;
