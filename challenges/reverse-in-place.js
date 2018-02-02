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
  // let i = 0;
  // let j = array.length - 1;

  // while (first < last) {
  //   let temp = array[i];
  //   array[i] = array[j];
  //   array[j] = temp;

  //   i++;   //commented out for 'coolness' (trying out suffix ++ above)
  //   j--;
  // }
  // return array;

  let temp = [];
  for (let i of array) {
    temp.unshift(array[i]);
  }
  console.log(temp)
  return temp;


}

module.exports = reverseInPlace;




