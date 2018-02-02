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
  if (array.length === 1) {
    return array;
  } else if (array.length > 1) {
    const mid = Math.floor(array.length / 2);
    const lastIdx = array.length - 1;
    for (let i = 0; i < mid; i += 1) {
      const curr = array[i];
      array[i] = array[lastIdx - i];
      array[lastIdx - i] = curr;
    }
    return array;
  }
  return [];
}

module.exports = reverseInPlace;
