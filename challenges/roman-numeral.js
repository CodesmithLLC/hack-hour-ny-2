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
  const arr = [1000,500,100,50,10,5,1];
  const r = ['M','D','C','L','X','V','I'];
  let s = '';
  let reminder = n;
  let c = Math.floor(reminder/1000);
  s += ('M').repeat(c);
  reminder = reminder % 1000;
  for (let i=2; i<=6; i+=2) {
    let c = Math.floor(reminder/arr[i]);
    if (c <= 3) {
      s += (r[i]).repeat(c);
    } else if (c === 4){
      s = s + r[i] + r[i-1];
    } else if (c === 9) {
      s = s + r[i] + r[i-2];
    } else { // 5-8
      s = s + r[i-1] + r[i].repeat(c-5);
    }
    reminder = reminder % arr[i];
  }
  return s;
}

module.exports = romanNumeral;
