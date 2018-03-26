/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */

function findInOrderedSet(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while(left <= right) {
    if (arr[left++] === target || arr[right--] === target) return true;
  }
  return false;
}

// function findInOrderedSet(arr, target) {
//   const str = arr.join('');
//   const rx = new RegExp(target);
//   return rx.test(str);
// }


module.exports = findInOrderedSet;
