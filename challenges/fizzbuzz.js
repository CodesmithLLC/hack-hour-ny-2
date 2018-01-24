/*eslint-disable */
// Write a function that returns an array containing the numbers 1 to NUM. Put "fizz" in place of numbers divisble by 3, 
// "buzz" in place of numbers divisble by 5, and "fizzbuzz" in place of numbers divisble by both 3 and 5
// fizzbuzz(16);  -> [ 1,
//                     2,
//                     'fizz',
//                     4,
//                     'buzz',
//                     'fizz',
//                     7,
//                     8,
//                     'fizz',
//                     'buzz',
//                     11,
//                     'fizz',
//                     13,
//                     14,
//                     'fizzbuzz',
//                     16 ]



function fizzbuzz(num) {
	var result = [];
	for (let i = 1; i <= num; i++) {
		let nextNum = [];  // check if nextNum meets one of the conditions

		
		if (i % 3 === 0) {
			nextNum.push('fizz');
		}
		if (i % 5 === 0) {
			nextNum.push('buzz');
		}
		if (i % 3 === 0 && i % 5 === 5) {
			nextNum.push('fizzbuzz');
		}

		if (nextNum.length === 0) {
			result.push(i);
		} else {
			result.push(nextNum[0])
		}
	}

	return result;

}

module.exports = fizzbuzz;






























