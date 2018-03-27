/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
    if (!arr) return false;
    if (arr[arr.length - 1] === target) return true;
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
      let mid = parseInt((left + right) / 2);
      if (arr[mid] === target) {
        return true;
      } else {
        if (arr[mid] > target) {
          right--;
        } else {
          left++;
        }
      }
    }
    return false;
  }


module.exports = findInOrderedSet;
