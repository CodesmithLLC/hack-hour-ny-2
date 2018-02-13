/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

function subsetSum(array, target) {
  console.log(array);
  if (!target) return true;
  if (!array.length) return false;
  
  return subsetSum(array.slice(1), target - array[0]) || subsetSum(array.slice(1), target);
}

subsetSum([3, 34, 4, 12, 5, 12], 32)













function subsetSum (array, target) {
  let possibilities = [];

  for (let i = 0; i < array.length; i++) {
    for (let exclude = 0; exclude < array.length; exclude++) {
      let newPossibility = [];
      newPossibility.push(array[i]);
      for (let k = exclude; k < array.length; k++) {
        if (k !== i) newPossibility.push(array[k]);
        if (possibilities.includes(JSON.stringify(newPossibility))) continue;
        let entry = newPossibility.reduce((acc, curr) => {
          acc.push(curr);
          return acc;
        }, []);
        if (checkAnswer(entry, target)) return true;
        possibilities.push(JSON.stringify(entry));
      }
    }
  }
  return false;
}

function checkAnswer(possibility, target) {
  let sum = possibility.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
  if (sum === target) return true;
  return false;
}


module.exports = subsetSum;
