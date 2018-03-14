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
  let top = 0;
  let bottom = array.length - 1;
  while(top < bottom){
    let temp = array[top];
    array[top] = array[bottom];
    array[bottom] = temp;
    
    top++;
    bottom--;
  }
  return array;
}

console.log(reverseInPlace([1, 2, 3, 4, 5]))
console.log(reverseInPlace([1, 2, 3]))
console.log(reverseInPlace([1, 2]))
console.log(reverseInPlace([1, 2, 3, 4, 5, 6]))

module.exports = reverseInPlace;
