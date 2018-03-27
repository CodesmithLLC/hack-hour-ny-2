/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
  if(arr[0] > target || arr[arr.length - 1] < target){
    return false;
  }

  const top = arr.length - 1;
  const bottom = 0;
  let i = Math.ceil((top) / 2);

  while(arr[i] !== target){
    if(arr[i - 1] < target && arr[i] > target){
      return false;
    }

    if(arr[i] > target){
      i -= Math.ceil((i - bottom) / 2);
    }
    else {
      i += Math.ceil((top - i) / 2);
    }
  }

  return true;
}

// var nums = [1, 4, 6, 7, 9, 17, 45]
// console.log("true", findInOrderedSet(nums, 4));  // -> true
// console.log("false", findInOrderedSet(nums, 2));  // -> false
// console.log("true", findInOrderedSet(nums, 1));
// console.log("true", findInOrderedSet(nums, 45));
// console.log("true", findInOrderedSet(nums, 17));
// console.log("false", findInOrderedSet(nums, 0));
// console.log("false", findInOrderedSet(nums, 46));

module.exports = findInOrderedSet;
