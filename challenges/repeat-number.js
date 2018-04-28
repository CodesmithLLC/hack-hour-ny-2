/**
 * I have an array where every number in the range 1...n appears once except for 
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time
 * Do this in O(1) space
 *
 */
arr = [1,5,12,3,7,6,9,8,2,10,11,13,4,12];

// O (n^2) time complexity
// function repeatNumbers(array){
// 	for (let i = 0; i < array.length-1; i++){
// 		for (let j = i+1; j < array.length; j++){
// 			if (array[i] === array[j]) return array[i]
// 		}
// 	}
// 	return null
// }


// O(2n)? 
// function repeatNumbers(array) {
// 	array = array.sort((a, b) => a - b);
// 	for (let i = 0; i < array.length-1; i++){
// 		if (array[i] === array[i+1]) return array[i];
// 	}
// 	return null
// }

//O(n) time, O(n) space
// function repeatNumbers(array){
// 	const mem = {}
// 	let repeated;
// 	for (let i = 0; i < array.length; i++){
// 		if (mem[array[i]]) return array[i] 
// 		else mem[array[i]] = true
// 	}
// 	return null
// }

// O(n) time, O(1) space
 function repeatNumbers(array) {
   const expected = ((array.length - 1) * array.length) / 2;
   let actual = 0;

   for (let i = 0; i < array.length; i++) {
     actual += array[i];
   }
   return actual - expected;
 }

console.log(repeatNumbers(arr))

module.exports = repeatNumbers;
