/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 *
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

// generate all possible subarrays
const subarrays = (array) => { // O(2^n)
 	const results = [[]];
 	for (const value of array) {
 		const copy = [...results];
 		for (const prefix of copy) {
 			results.push(prefix.concat(value));
 		}
 	}
 	return results;
 };

// use reduce to see if sum of any subarray === target value
function subsetSum(array, target) {
  let subArrs = subarrays(array);
  for(const subA of subArrs){
    if(subA.length > 0){
      let subSum = subA.reduce((a,c) => a+c );
      console.log('sum: ', subSum)
      if(subSum === target) return true;
    }
  }
  return false;
}

module.exports = subsetSum;
