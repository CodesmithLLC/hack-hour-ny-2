/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
  let len = arr.length;
  while(len > 1){
   let midIdx = Math.floor(arr.length/2)
   let mid = arr[midIdx];
   if(target < mid) {
     arr = arr.slice(0, midIdx)
   } else {
     arr = arr.slice(midIdx, len)
   }
   len = arr.length;
  }
  return arr[0] === target
}

findInOrderedSet([1, 4, 6, 7, 9, 17, 45], 4)

module.exports = findInOrderedSet;
