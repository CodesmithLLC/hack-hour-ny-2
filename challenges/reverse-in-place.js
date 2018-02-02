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
  // find the halfway point
  // iterate to the halfway point
  // switch the characters with the char at (length-1) - currentIndex

  // check if length is even or odd
  const midpoint = (array.length % 2 === 0) ? (array.length-1)/2 : Math.floor(array.length/2);
  // iterate up to midpoint
  for (let i = 0; i <= midpoint; i++) {
    // find the opposite index
    let oppositeIndex = (array.length-1) - i;
    // save the front character
    let frontChar = array[i];
    // save the back character
    let backChar = array[oppositeIndex];
    // reassign the opposite characters
    array[i] = backChar;
    array[oppositeIndex] = frontChar;
  }
  return array;
}

module.exports = reverseInPlace;
