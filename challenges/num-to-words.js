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
const words = ['Zero','One','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten',
'Eleven', 'Twelve', 'Thirteen','Fourteen','Fifteen','Sixteen','Seventeen', 'Eightteen', 'Nineteen',
'Twenty', 'Thirty', 'Forty', 'Fifty','Sixty','Seventy', 'Eighty','Ninty','Hundred','Thousand','Million','Billion','Trillion','Quadrillion']
const nums = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,30,40,50,60,70,80,90,100,1000,1000000,1000000000,1000000000000]

function numToWords(num) {

  let result = '';
  let i = 0;
  if (num === 0) return 'Zero';

  while ( num > 0 ){
    if (nums[i] === num){
      result += words[i];
      num = num-nums[i];
      i = 0;
    }
    if (nums[i] < num && nums[i+1] > num){
      let tempWord = words[i];
      while (num > nums[i]){

      }
      result += words[i];
      num = num-nums[i];
      i = 0;
      console.log(num, Math.floor(num))

    }
    i++;
  }
  return result;
}

console.log(numToWords(4333));

module.exports = numToWords;
