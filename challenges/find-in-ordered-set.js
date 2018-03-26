/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
  if (arr[0] === target) {
    return true
  }
  if (arr.length === 1) {
    return false
  }
  
  let halfArr1 = arr.slice(0, Math.floor(arr.length / 2))
  let halfArr2 = arr.slice(Math.floor(arr.length / 2))
  if (target <= halfArr1[halfArr1.length - 1]) {
    return findInOrderedSet(halfArr1, target)
  }
  else { 
    return findInOrderedSet(halfArr2, target)
  }
}


module.exports = findInOrderedSet;
