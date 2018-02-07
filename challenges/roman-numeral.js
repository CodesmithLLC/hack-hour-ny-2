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
	let numerals = {
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
		'900': 'CM',
		'1000': 'M'
	}

	if(numerals[n]) return numerals[n]
	let numeral = '';
	let nums = Object.keys(numerals).reverse();
	let idx = 0;
  while(n % Number(nums[idx])){
    if(n % Number(nums[idx]) !== n) {
      n -= nums[idx]
      numeral += numerals[nums[idx]]
    }
    idx++
  }
  if(numerals[n]) numeral += numerals[n]
	return numeral
}

module.exports = romanNumeral;
