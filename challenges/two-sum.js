/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */


// function twoSum(arr, n) {
//   if(!arr || !arr.length) return false;
//   if(arr[0] === n) return true;
//   return twoSum(arr.slice(1), n - arr[0]) || twoSum(arr.slice(1), n);
// }

function twoSum(arr, n) {
  if(!arr || !arr.length) return false;
  let mySet = new Set();
  for (let i = 0; i < arr.length; i++) {
    if(mySet.has(n - arr[i])) return true;
    mySet.add(arr[i])
  }
  return false;
}


// function twoSum(arr, n) {
//   if(!arr || !arr.length) return false;
//   while (arr && arr.length) {
//     if(arr.includes(n - arr.pop())) return true;
//   }
//   return false;
// }


// function twoSum(arr, n) {
//   if(!arr || !arr.length) return false;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if(j === i) j++;
//       if (arr[j] === n - arr[i]) return true;
//     }
//   }
//   return false;
// }

module.exports = twoSum;
