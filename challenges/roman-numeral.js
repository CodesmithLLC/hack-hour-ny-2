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
   let decreaseTotal = n;
   result = '';
   const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
   const map = {
     1: 'I',
     4: 'IV',
     5: 'V',
     9: 'IX',
     10: 'X',
     40: 'XL',
     50: 'L',
     90: 'XC',
     100: 'C',
     400: 'CD',
     500: 'D',
     900: 'CM',
     1000: 'M'
   }
   for (let i = 0; i < values.length; i++) {
     while (values[i] <= decreaseTotal) {
       result += map[values[i]];
       decreaseTotal -= values[i];
     }
   }
   return result;
 }

module.exports = romanNumeral;
