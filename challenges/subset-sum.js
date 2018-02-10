/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

function subsetSum (array, target) {
  
}
  


  // for (let i = 0; i < array.length; i++) {
  //   if(!possibilities.includes(array[i])) possibilities.push([array[i]]);
  //   for (j = 0; j < array.length; j++) {
  //     if (j !== i) {
  //       if (j < i) {
  //         if(!possibilities.includes(array.slice(j, i))) possibilities.push(array.slice(j, i));
  //       }
  //       else {
  //         if(!possibilities.includes(array.slice(i, j + 1))) possibilities.push(array.slice(i, j + 1));
  //       }
  //     }
  //   }
  // }



// function subsetSum(array, target, i = 0) {
//   let newArr = array.sort();

//   if (array.includes(target)) return true;
//   if (array[0] > target) {
//     return subsetSum(array, target, i += 1);
//   }
//   return subsetSum(array.slice(1), target - array[0], i);
// }


// function subsetSum(array, target) {
//   let arr = [];
//   let i = 0;
//   let total = 0;

//   arr = array.sort();
//   for (let j = 0; array[j] < target; j++) {
//     total += array[j];
//     for (let i = 0; i < arr.length; i++) {
//       if (total + array[i] === target) return true;
//       if (total + array[i] > target) {

//       }
//     }
//   }
// }




module.exports = subsetSum;
