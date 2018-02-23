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
  let newNum = num.toString().split('').reverse();
  console.log(newNum)
  let numOfDigits = newNum.length;
  let obj = {
    0: null,    //hundreds
    1: null,    //thousands
    2: null,    //millions
    3: null,    //billions
    4: null     //trillions
  };

  let i = 0, j = 3, k = 0;
  while(newNum[j]) {
    obj[k] = newNum.slice(i, j).reverse();
    i += 3;
    j += 3;
    k++;
  }
  obj[k] = newNum.slice(i).reverse();
  
  let names = {
    0: null,
    1: 'Thousand',
    2: 'Million',
    3: 'Billion',
    4: 'Trillion'
  }
  
  let nums = {
    0: '',
    1: 'One',
    2: 'Two',
    3: 'Three', 
    4: 'Four', 
    5: 'Five', 
    6: 'Six', 
    7: 'Seven', 
    8: 'Eight', 
    9: 'Nine'
  }
  
  let tens = {
    0: '',
    1: 'Ten',
    2: 'Twenty',
    3: 'Thirty',
    4: 'Forty',
    5: 'Fifty',
    6: 'Sixty',
    7: 'Seventy',
    8: 'Eighty',
    9: 'Ninety',
  }
  
  let answer= {
    0: '',
    1: '',
    2: '',
    3: '', 
    4: '',
  }
  
  Object.keys(obj).forEach((unit) => {
    let placeHolder = (names[unit]) ? names[unit] : '';
    let string = '';
    if (obj[unit][0]) string = string.concat(nums[obj[unit][0]] + 'Hundred');
    if (obj[unit][1]) string = string.concat(tens[obj[unit][1]]);
    if (obj[unit][2]) string = string.concat(nums[obj[unit][2]]);
    string = string.concat(placeHolder);
    console.log(string)
    answer[unit] = string;
  });
  
  let answerString = '';
  Object.keys(answer).reverse().forEach((thingy) => {
    answerString += answer[thingy];
  })
  return answerString
}


module.exports = numToWords;
