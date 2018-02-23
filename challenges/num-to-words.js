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

const obj = {
  "One": 1,
  "Two": 2,
  "Three": 3,
  "Four": 4,
  "Five": 5,
  "Six": 6,
  "Seven": 7,
  "Eight": 8,
  "Nine": 9,
  "Ten": 10,
  "Eleven": 11,
  "Twelve": 12,
  "Thirteen": 13,
  "Fourteen": 14,
  "Fifteen": 15,
  "Sixteen": 16,
  "Seventeen": 17,
  "Eightteen": 18,
  "Nineteen": 19,
  "Twenty": 20,
  "Thirty": 30,
  "Forty": 40,
  "Fifty": 50,
  "Sixty": 60,
  "Seventy": 70,
  "Eighty": 80,
  "Ninety": 90,
  "Hundred": 100,
  "Thousand": 1000,
  "Million": 1000000,
  "Billion": 1000000000,
  "Trillion": 1000000000000,
  "Quadrillion": 1000000000000000
};

const record = Object.keys(obj).reduce((newObj, key) => {
  newObj[obj[key]] = key;
  return newObj;
}, {})

function numToWords(num) {
  if(!num) return "Zero";
  let result = '';

  const numbers = Object.keys(record).reverse();
  numbers.forEach((dig) => {
    const digit = parseInt(dig, 10);

    if(num >= digit){
      if(num >= 100){
        if(num === digit) result = result + 'One' + record[dig];
        else result = result + numToWords(Math.floor(num/digit)) + record[dig];

        num %= digit;
      }
      else {
        result += record[dig];
        num -= digit;
      }
    }
  });

  // console.log(result);
  // console.log('');
  return result;
}

// console.log(numToWords(0)) //-> 'Zero'
// console.log(numToWords(43)) //-> 'FortyThree'
// console.log(numToWords(2999)) //-> 'TwoThousandNineHundredNintyNine'
// console.log(numToWords(15)) //-> 'Fifteen'
// console.log(numToWords(2483579411)) //-> 'TwoBillionFourHundredEightyThreeMillionFiveHundredSeventyNineThousandFourHundredEleven'
// console.log(numToWords(300525151340440)) //-> 'ThreeHundredTrillionFiveHundredTwentyFiveBillionOneHundredFiftyOneMillionThreeHundredFortyThousandFourHundredForty'
// console.log(numToWords(92120000000000000)) //-> 'NintyTwoQuadrillionOneHundredTwentyTrillion'

module.exports = numToWords;
