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

function romanNumeral(n, romanNum = '') {
	// deconstruct the number and build it up as a string of roman numerals 
	// 79 = 50 + 10 + 10 + 1 + 5 = LXXIX
	// its 5, 10, 50 based
	// When current num is 1 less than 5 or 10 a I is placed in front of V or X
	// When current num is 10 less than % 50 number an X is placed in front
	let splitNums, tempNum, tempStr, romanChar;

	if (n === 0) {
		return romanNum;
	}

	if (n >= 1000) {
		return "M";
	}

	if (n >= 500 && n < 1000) {
		if (n >= 900 && n <= 999) {
			romanNum += "CM";
			n = n - 900;
		} else {
			romanNum += "D"
			n = n % 500;
		}

		return romanNumeral(n, romanNum);
	}

	if (n >= 100 && n < 500) {
		if (n >= 400 && n <= 499) {
			romanNum += "CD";
			n = n - 400;
		} else {
			romanChar = "C"
			tempStr = convertNumToStr(n, romanChar);
			romanNum += tempStr;
			n = n % 100;
		}

		return romanNumeral(n, romanNum);
	}

	if (n >= 50 && n < 100) {
		if (n >= 90 && n <= 99) {
			romanNum += "XC";
			n = n - 90;
		} else {
			romanNum += "L"
			n = n % 50;
		}
		
		return romanNumeral(n, romanNum)
	}

	if (n >= 10 && n < 50) {
		if (n >= 40 && n <= 49) {
			romanNum += "XL";
		} else {
			romanChar = "X"
			tempStr = convertNumToStr(n, romanChar);
			romanNum += tempStr;
		}

		n = n % 10;
		return romanNumeral(n, romanNum);
	}

	if (n > 5 && n < 10) {
		if (n === 9) {
			romanNum += "IX";
			n = n - 9;
		} else {
			romanChar = "V"
			romanNum += romanChar;
			n = n % 5;
		}

		return romanNumeral(n, romanNum);
	}

	if (n > 0 && n <= 5) {
		if (n === 5) {
			romanNum += "V";
		} else if (n === 4) {
			romanNum += "IV";
		} else {
			romanChar = "I"
			tempStr = convertNumToStr(n, romanChar);
			romanNum += tempStr;
		}

		n = 0;
		return romanNumeral(n, romanNum);
	}
}

function convertNumToStr(num, romanChar) {
	splitNums = num.toString().split('');
	tempNum = parseInt(splitNums[0]);
	tempStr = romanChar;
	tempStr = tempStr.repeat(tempNum);
	return tempStr;
}

console.log(romanNumeral(523));

module.exports = romanNumeral;
