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
  let j = array.length - 1;
  for(; j>=0; j--){
    array.push(array[j]);
  }
  return array.splice(array.length/2);
}


// function reverseInPlace(array) {
//   let i = 0;
//   let j = array.length - 1;
//   for(; i<array.length/2; i++,j--){
//     console.log(array[i], array[j])
//     let temp = array[i];
//     array[i] = array[j];
//     array[j] = temp;
//   }
//   return array;
// }


module.exports = reverseInPlace;
