'use strict';
/**
 * Write a function to reverse an array in place
 *
 * "In place" means "without creating a new object in memory"
 *
 * In some languages, strings are mutable (like in Ruby). In other languages,
 * such as Python and Javascript, strings are immutable, meaning they cannot
 * be changed after they're created.
 *
 * Since strings are immutable in javascript, we will be reversing an array of characters instead.
 *
 * DO NOT USE THE BUILT IN REVERSE METHOD
 */

function reverseInPlace(array) {
	
  let reversedArr = array; 
  let halfOfArr = array.length / 2;
  let firstHalf = reversedArr.slice(0, halfOfArr);
  let secondHalf = reversedArr.slice(halfOfArr);
   
  let first = 0; 
  let second = firstHalf.length - 1;
  
	for(let i = secondHalf.length; i > 0; i--){
    let x = secondHalf[i -1]
		reversedArr[first] = x; 
		first++; 
	}
	
	for(let j = firstHalf.length; j < reversedArr.length; j++){
	  
		let x = firstHalf[second];
		reversedArr[j] = x; 
		second--;
	}
	
	return reversedArr;
}


module.exports = reverseInPlace;
