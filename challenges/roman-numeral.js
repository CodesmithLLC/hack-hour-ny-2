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
  const nStr = n.toString()
  let output = []
  let pos = 0;
  let temp = ''
  let roman = '';
  for (let i = nStr.length - 1; i >=0; i -= 1) {
    switch (pos) {
      case 0: 
        if (1<= nStr[i] < 4 ) {
          for (let n = 1; n <= nStr[i]; n += 1) { 
            n += 'I';
            output.unshift(n)
          }
        }
        if (nStr[i] === 4) {
          output.unshift('IV')
        }
        if ( nStr[i] === 5 ) {
          output.unshift('V')
        }
        if (6<= nStr[i] <= 8) {
          n = 'V'
          for (let n = 6; n <= nStr[i]; n += 1) { 
            n += 'I';
            output.unshift(n)
          }
        }
          if ( nStr[i] === 9 ) {
            output.unshift('IX')
        }
      case 1: 
        console.log('go')
    }

    pos += 1
  }
  for (let i = 0; i < output.length; i += 1) {
    roman += output[i]
  }
  return roman
}

module.exports = romanNumeral;
