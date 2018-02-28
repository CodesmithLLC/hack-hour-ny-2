/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

   
 // subtract target from each element, then see if the array contains that value



function twoSum(arr, n) {

  for(let i=0; i<arr.length; i++){
    let curr = arr[i];
    let otherNum = n - curr; 
    let tempArr = arr.slice(0,i).concat(arr.slice(i+1));
    if(tempArr.includes(otherNum))return true; 
  }
  return false;
}

twoSum([1,2,3,4,5], 5)


module.exports = twoSum;
