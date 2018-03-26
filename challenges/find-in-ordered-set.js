/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */

function findInOrderedSet(arr, target) {
  if (arr.length === 1 && arr[0] !== target) return false;
  let midInd = Math.floor(arr.length / 2);
  if (target > arr[midInd]) return findInOrderedSet(arr.slice(midInd, arr.length), target);
  if (target < arr[midInd]) return findInOrderedSet(arr.slice(0, midInd), target);
  if (target === arr[midInd]) return true;
  return false;
}


// function findInOrderedSet(arr, target) {
//   let left = 0;
//   let right = arr.length - 1;
//   while(left <= right) {
//     if (arr[left++] === target || arr[right--] === target) return true;
//   }
//   return false;
// }

// function findInOrderedSet(arr, target) {
//   const str = arr.join('');
//   const rx = new RegExp(target);
//   return rx.test(str);
// }


module.exports = findInOrderedSet;
