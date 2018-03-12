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
	// assuming all positive. 
	if(num < 0)
		return 'Please provide a number greater than 0'

	if(num <= 20)
	return baseKeyPair[num]

	let stringV = num.toString();
	let length = stringV.length;
	let newString = '';
	let counter = length; 

	for(let i = 0; i < length; i++){
		if(counter === 1){
			newString += baseKeyPair[Number(stringV[i])]
			counter --; 
	  }

		if(counter === 2){
			let num = stringV[i]
			if(Number(num) < 39){
				if(num[0] === '3'){
					let temp = baseKeyPair[num[0]].slice(0,2)
					temp += 'irty'
					newString += temp; 
				}
			}
		}
	}
	return newString
}

	




// if 1-10 -> new word
// eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen



}

module.exports = numToWords;
