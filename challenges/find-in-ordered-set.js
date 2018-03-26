/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */

function getHalfOfArray(arr) {
  return Math.floor(arr.length / 2);
}

function findInOrderedSet(arr, target) {
  let temp = arr[getHalfOfArray(arr)];
  while (temp !== target && arr.length !== 1) {
    if (temp > target) arr = arr.slice(0, getHalfOfArray(arr));
    if (temp < target) arr = arr.slice(getHalfOfArray(arr));
    temp = arr[getHalfOfArray(arr)];
  }
  return temp === target;
}

module.exports = findInOrderedSet;
