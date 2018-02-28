/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */


function twoSum(arr, n, count = 0) {
    if (!arr.length) return false;
    if (!n) return count === 2 ? true : false;
    return twoSum(arr.splice(1), n - arr[0], count + 1) || twoSum(arr.splice(1), n, count);
}

module.exports = twoSum;
