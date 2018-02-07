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

 const num = {
   '1': 'I',
   '4': 'IV',
   '5': 'V',
   '9': 'IX',
   '10': 'X',
   '40': 'XL',
   '50': 'L',
   '90': 'XC',
   '100': 'C',
   '400': 'CD',
   '500': 'D',
   '900': 'CK',
   '1000': 'M'
 }

function romanNumeral(n) {
  if(n < 1){
    return;
  }
  let result = '';
  const keys = Object.keys(num).reverse();

  keys.forEach((key) => {
    const int = parseInt(key);
    while(n >= int){
      result += num[key];
      n -= int;
    }
  });

  return result;
}

console.log(romanNumeral(6));

module.exports = romanNumeral;
