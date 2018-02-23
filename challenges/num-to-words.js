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
  if (num === 0) return 'Zero';
  const oneToNine = ['','One','Two','Three','Four','Five','Six','Seven','Eight','Nine'];
  const elevenTo19 = ['Eleven','Twelve','Thirteen','Fourteen','Fifteen','Sixteen','Seventenn','Eighteen','Nineteen'];
  const tens = ['Ten','Twenty','Thirty','Forty','Fifty','Sixty','Seventy','Eighty','Ninty'];
  const thousands = ['Thousand','Million','Billion','Trillion'];
  if (num < 10) return oneToNine[num];
  if (num === 10) return tens[0];
  if (num < 20) return elevenTo19[num-11];
  if (num < 100) {
    let result = '';
    let left = Math.floor(num/10);
    let remainder = num % 10;
    result = tens[left-1] + oneToNine[remainder]
    return result;
  }
  if (num < 1000) {
    let result = '';
    let left = Math.floor(num/100);
    let remainder = num % 100;
    result = oneToNine[left] + 'Hundred';
    result += (!remainder) ? '' : numToWords(remainder);
    return result;
  }
  if (num < 1000000) {
    let result = '';
    let left = Math.floor(num/1000);
    let remainder = num % 1000;
    result = numToWords(left) + thousands[0];
    result += (!remainder) ? '' : numToWords(remainder);
    return result;
  }
  if (num < 1000000000) {
    let result = '';
    let left = Math.floor(num/1000000);
    let remainder = num % 1000000;
    result = numToWords(left) + thousands[1];
    result += (!remainder) ? '' : numToWords(remainder);
    return result;
  }
  if (num < 1000000000000) {
    let result = '';
    let left = Math.floor(num/1000000000);
    let remainder = num % 1000000000;
    result = numToWords(left) + thousands[2];
    result += (!remainder) ? '' : numToWords(remainder);
    return result;
  }
  if (num < 1000000000000000) {
    let result = '';
    let left = Math.floor(num/1000000000000);
    let remainder = num % 1000000000000;
    result = numToWords(left) + thousands[2];
    result += (!remainder) ? '' : numToWords(remainder);
    return result;
  }
  // let idx = 0;
  // let result = '';
  // while (num >= 1000) {
  //   let left = Math.floor(num/1000);
  //   let remainder = num % 1000;
  //   result = oneToNine[left] + thousands[idx];
  //   result += (!remainder) ? '' : numToWords(remainder);
  // }


}

module.exports = numToWords;
