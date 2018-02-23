// Write a function that takes a number as an argument and returns its english word representation as a string. Answers should be in upper camel case (a.k.a. Pascal case). Don't worry about spaces.
// Include support for 11-19 ('Eleven', 'Twelve', 'Thirteen', ... 'Nineteen').


/**
 * numToWords(0) -> 'Zero'
 * numToWords(43) -> 'FortyThree'
 * numToWords(2999) -> 'TwoThousandNineHundredNintyNine'
 * numToWords(15) -> 'Fifteen'
 * numToWords(2483579411) -> 'TwoBillionFourHundredEightyThreeMillionFiveHundredSeventyNineThousandFourHundredEleven'
 * numToWords(300525151340440) -> 'ThreeHundredTrillionFiveHundredTwentyFiveBillionOneHundredFiftyOneMillionThreeHundredFortyThousandFourHundredForty'
 * numToWords(92120000000000000) -> 'NintyTwoQuadrillionOneHundredTwentyTrillion'
 */


function numToWords(num) {

  // const tenTo19 = {
  //   11: 'Eleven',
  //   12: 'Twelve',
  // }
  let result = [];
  let ones, tens, hundreds, thousands;

  function isTruthy(item) {
    return !!item;
  }

  const oneTo19 = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];

  const TENS = ["Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

  if (num < 20) {
    return oneTo19[num - 1];
  }
  if (num < 100) {
    ones = num % 10;
    tens = Math.floor(num / 10);
    result.push(TENS[tens - 1]);
    result.push(oneTo19[ones - 1]);

    return result.join('');
  }

  hudreds = Math.floor(num / 100);  // 345 => 3 => Three
  result.push(numToWords(hundreds)); // 3 => Three
  result.push("Hundred");   // 'ThreeHundred
  result.push(numToWords(num % 100)); // 45 => FourtyFive

  return result.join("");
}

module.exports = numToWords;
