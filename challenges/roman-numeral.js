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
  /* 
      1 -> I , 5 -> V, 10 -> X; 50 = L; 100 = C;  500 = D;  1000 = M
      4 = 5 - 1 = I + V;  3 = III;  7 = 5 + 2 = VII;  8 = 5 + 3 = VIII
    90 = XC (100 - 10)
    400 = CD (500 - 100)
    900 = CM (1000 - 100)
  */
  let result = "";

  // const anchors = {
  //   1000: 'M',
  //   900: 'CM',
  //   500: 'D',
  //   400: "CD",
  //   100: 'C',
  //   90: "XC",
  //   50: 'L',
  //   40: "XL",
  //   10: 'X',
  //   9: "IX",
  //   5: 'V',
  //   4: 'IV',
  //   1: "I",
  // }
 
  // // getting keys, and converting each to number type
  // const keyNums = Object.keys(anchors).map((numStr) => parseInt(numStr));
  // // keyNums = array of keys in anchors

  // console.log(keyNums);
  // // console.log(keyNums.indexOf(n))
  // let index = keyNums.indexOf(n);
  // index = index.toString()
  // let keyInAnchor = keyNums[index]

  // console.log(keyInAnchor)
  // // console.log(anchors[5])

  // if (keyNums.indexOf(n)) {
  //   return anchors[keyInAnchor]
  // }

  const anchors = [
    1000, 'M',
    900, 'CM',
    500, 'D',
    400, "CD",
    100, 'C',
    90, "XC",
    50, 'L',
    40, "XL",
    10, 'X',
    9, "IX",
    5, 'V',
    4, 'IV',
    1, "I",
  ] 

  

}

module.exports = romanNumeral;
