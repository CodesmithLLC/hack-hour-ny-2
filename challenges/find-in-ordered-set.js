/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */
// var nums = [1, 4, 6, 7, 9, 17, 45]
// console.log(findInOrderedSet(nums, 3));

//binary search
function findInOrderedSet(arr, target) {
  if(arr[0] === target) return true;
  if(arr.length === 1 && arr[0] !== target) return false;
  
  let mid = Math.floor(arr.length/2);
  if(target < arr[mid]) return findInOrderedSet(arr.slice(0, mid), target);
  return findInOrderedSet(arr.slice(mid), target);
}


module.exports = findInOrderedSet;
