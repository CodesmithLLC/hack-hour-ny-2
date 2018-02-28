/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

   
 // subtract target from each element, then see if the array contains that value


function twoSum(arr, n) {

  for(let num of arr){
    let otherNum = n - num; 
    if(arr.includes(otherNum))return true; 
  }
  return false;
}

twoSum([1,2,3,4,5], 11)

module.exports = twoSum;
