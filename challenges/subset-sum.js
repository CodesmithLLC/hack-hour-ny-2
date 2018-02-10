/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

function subsetSum(array, target) {
	const combinations = [];
  const recur = (comb, arr) => {
   // console.log(comb);
    for (let i = 0; i < arr.length; i++){

      combinations.push( comb.concat(arr[i]) );
      
      recur( comb.concat(arr[i]), arr.slice(i+1) );
    }
  }
	recur([], array);
  console.log(combinations);
  let sum;
  let result = false;
  combinations.forEach((comb) => {
    sum = comb.reduce((acc, cur) => acc + cur)
    //console.log(sum , target);
    if (sum === target) result = true;
  })
  return result;
}
console.log(subsetSum([3, 34, 4], 7));
module.exports = subsetSum;
