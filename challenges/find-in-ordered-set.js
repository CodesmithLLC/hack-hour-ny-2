/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
  let minIdx = 0;
  let maxIdx = arr.length - 1;
  let currMidIdx = Math.floor( (maxIdx + minIdx) / 2 );
  while(minIdx !== maxIdx) {
    if(arr[currMidIdx] === target) {
      return true;
    }
    if(arr[currMidIdx] > target) {
      maxIdx = currMidIdx - 1; 
      currMidIdx = Math.floor( (maxIdx + minIdx) / 2);
    }
    if(arr[currMidIdx] < target) {
      minIdx = currMidIdx + 1;
      currMidIdx = Math.floor((maxIdx + minIdx) / 2);
    }
  }
  return arr[minIdx] === target;

}


module.exports = findInOrderedSet;
