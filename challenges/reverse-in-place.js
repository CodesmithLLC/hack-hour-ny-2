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
 *
 * input -> [a,b,c,d,e]
 * output -> [e,d,c,b,a]
 */

function reverseInPlace(array) {
	// move the first character to the end of the array
	// use array.length - 1 to reassign the first character to the last character
	// then the second character to the second to last character and so on

	const last = array.length - 1;
    let counter = 0;

    for (let j = last; j >= last / 2; j--) {
      let temp1 = array[j];
      let temp2 = array[counter];
      array[counter] = temp1;
      array[j] = temp2;
      counter++;
    }
    
	return array;
}

module.exports = reverseInPlace;
