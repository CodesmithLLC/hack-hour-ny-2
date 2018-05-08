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
let list = [10,20,30,40,50,60,70,80];
//list.length = list.length - 1;
// function reverseInPlace(array) {
// 	let len = array.length-1;
// 	for (let i = 0; i < array.length/2; i++){
// 		array[i] = array.splice(len, 1, array[i])[0];
// 		len--;
// 	}
// 	return array;
// }

const reverseString = (arr) => {
  if (arr.length < 2) return arr;
  let result = [];
  for (let i = arr.length-1; i >= 0; i--){
    arr.push(arr[i]);
  }
  return arr.splice(arr.length/2)
 }
 //console.log(reverseInPlace(list));
module.exports = reverseInPlace;
