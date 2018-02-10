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


const digits = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const romans = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

function romanNumeral(n) {
    let input = n;
    let result = "";
    for (let i = 0; i < digits.length; i += 1) {
        if (input / digits[i] > 0) {
            let times = Math.floor(input / digits[i]);
            result += romans[i].repeat(times);
            input -= digits[i] * times;
        }

    }
    return result;
}

module.exports = romanNumeral;
