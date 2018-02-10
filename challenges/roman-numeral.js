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
	// base ten less than the largest figure. 
	// keep slicing from the right.  
	// Had some help. Considered looping through object but did not think you could make your own key for CM and XC :D

	let romanList = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1} 
	let roman = ''
	let char = null; 
  for ( char in romanList ) {
    while ( n >= romanList[char] ) {
      roman += char;
      n -= romanList[char];
    }
  }
  return roman;
}

module.exports = romanNumeral;
