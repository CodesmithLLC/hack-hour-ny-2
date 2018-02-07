// Write a function that returns an array containing the numbers 1 to NUM. Put "fizz" in place of numbers divisble by 3, "buzz" in place of numbers divisble by 5, and "fizzbuzz" in place of numbers divisble by both 3 and 5
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


	let newArr = [];
	
	let divisibleBy3 = function(i){
		if(i % 3 === 0)
			return true
	}

	let divisibleBy5 = function(i){
		if(i % 5 === 0)
			return true
	}
	
	let divisibleBy5n3 = function(i){
		if(i % 3 === 0 && i % 5 === 0)
			return true
	}

	if(num < 0)
		return; 

		for(var i = 1; i <= num; i++){
			if(divisibleBy5n3(i))
				newArr.push('fizzbuzz')
			else if(divisibleBy5(i))
				newArr.push('buzz')
			else if(divisibleBy3(i))
				newArr.push('fizz')
			else 
				newArr.push(i);
		}

		// 	if(i % 3 === 0 && i % 5 === 0 && i !== 0)
		// 		newArr.push('fizzbuzz')
		// 	else if(i % 5 === 0 && i !== 0)
		// 		newArr.push('buzz')
		// 	else if(i % 3 === 0 && i !== 0)
		// 		newArr.push('fizz')
		// 	else 
		// 		newArr.push(i);
		// }

	return newArr; 
}

module.exports = fizzbuzz;
