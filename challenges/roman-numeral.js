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

 let ints = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
 let romans = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];


function romanNumeral(n) {
	let result = '';
	let tempNum;
	for (let i = 0; i < ints.length; i++){
		if (n >= ints[i]){
			result += romans[i];
			n = n%ints[i];
		}
	}
	return result;
}
 //console.log(romanNumeral(6));


module.exports = romanNumeral;
