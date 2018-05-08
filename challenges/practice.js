/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

 const subsetSum = (arr, target) => {
  const combinations = [];console.log(combinations);
  const recur = (comb, array) => {
    for (let i = 0; i < array.length; i++){

      combinations.push(comb.concat(array[i]));

      recur(comb.concat(array[i]), array.slice(i+1));
    }
  } 

  recur([], arr);
    console.log(combinations);
    let result = false;
    combinations.forEach((comb) => {
      if (comb.reduce((acc, cur) => acc + cur) === target) result = true;
    })
    return result;
 }

 console.log(subsetSum([3, 34, 4], 7));