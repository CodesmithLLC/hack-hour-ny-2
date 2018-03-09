// Write a function that takes a number as an argument and returns its english word representation as a string. Answers should be in upper camel case (a.k.a. Pascal case). Don't worry about spaces.
// Include support for 11-19 ('Eleven', 'Twelve', 'Thirteen', ... 'Nineteen').


/**
 * numToWords(0) -> 'Zero'
 * numToWords(43) -> 'FortyThree'
 * numToWords(2999) -> 'TwoThousandNineHundredNintyNine'
 * numToWords(15) -> 'Fifteen'
 * numToWords(2,483,579,411) -> 'TwoBillionFourHundredEightyThreeMillionFiveHundredSeventyNineThousandFourHundredEleven'
 * numToWords(300,525,151,340,440) -> 'ThreeHundredTrillionFiveHundredTwentyFiveBillionOneHundredFiftyOneMillionThreeHundredFortyThousandFourHundredForty'
 * numToWords(92120000000000000) -> 'NintyTwoQuadrillionOneHundredTwentyTrillion'
 */

function numToWords(num) {
	const setA = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];

	const setB = ['Twenty', 'Thirty', 'Fourty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

	const setC = ['Hundred', 'Thousand', 'Million', 'Billion', 'Trillion', 'Quadrillion'];

	const nStr = num.toString(); 
	let array = [];
	
	for (let i = nStr.length - 1; i >= 0; i -= 3) {
		if (i === 0) array.push(nStr.slice(0, 1));
		else array.push(nStr.slice(i - 2, i + 1));
	}

	return array;
}

	// iterate from the back taking 3 at a time
	// const nStr = num.toString();
	// let counter = 1; 
	// let outputStr = '';

	// for (let i = nStr.length - 1; i >= 0; i--) {
	// 	// console.log('counter', counter)
	// 	// console.log(i, nStr[i])
	// 	if (counter === 4) return outputStr;
	// 	outputStr += setA[nStr[i]];
	// 	if (counter % 3 === 0) {
	// 		outputStr += 'Hundred';
	// 	}



	// 	counter++;
	// }

	// return 'done'

console.log(numToWords(2483579411));
//console.log(numToWords(300525151340440));

module.exports = numToWords;
