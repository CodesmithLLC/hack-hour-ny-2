/* Given a positive integer, return it as a string in Roman Numeral form.
 * Some basic conversions are given below:
 *
 *      1     ->    I
 *      4     ->    IV
 *      5     ->    V
 *      9     ->    IX
 *      10    ->    X
 *      40    ->    XL
 *      50    ->    L
 *      90    ->    XC
 *      100   ->    C
 *      400   ->    CD
 *      500   ->    D
 *      900   ->    CM
 *      1000  ->    M
 * 
 */

function romanNumeral(n) {
  let conversion = {
    1: 'I',
    5: 'V',
    10: 'X',
    50: 'L',
    100: 'C',
    500: 'D',
    1000: 'M'
  }

  let nums = Object.keys(conversion).sort(function(a, b) { 
    return b-a;
  });

  let str = '';

  for (let i = 0; i < nums.length; i += 2) {
    let divide = Math.floor(n / nums[i]);
    if (divide) {
      if (divide === 9) {
        str += conversion[nums[i]];
        str += conversion[nums[i - 2]];
        n = n - (nums[i] * 9);
        continue;
      }
      if (divide === 4) {
        str += conversion[nums[i]];
        str += conversion[nums[i - 1]];
        n = n - (nums[i] * 4);
        continue;
      }
      if (divide > 4) {
        str += conversion[nums[i - 1]];
        str += multipleNums(divide - 5, conversion[nums[i]]);
        n = n - (nums[i] * divide);
        continue;
      }
      str += multipleNums(divide, conversion[nums[i]]);
      n = n % nums[i];
    }
  }
  return str;
}

function multipleNums(value, romanNum, string = '') {
  if (!value) return string;
  return multipleNums(value - 1, romanNum, string += romanNum);
}

module.exports = romanNumeral;
