/**
 * We have our lists of orders sorted numerically already, in arrays.
 * Write a functin to merge our arrays of orders into one sorted array.
 * These may be of different lengths.
 *
 * var my_array = [3,4,6,10,11,15,21];
 * var another_array = [1,5,8,12,14,19];
 *
 * mergeArrays(my_array, another_array); -> [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]
 * 
 * BONUS: 
 * Complete in O(n) time  
 *
 */

function mergeArrays(arr1, arr2) {
    let a1 = [...arr1];
    let a2 = [...arr2];
    let newArr = [];

    while (a1.length > 0 && a2.length > 0) {
        let nextVal = a1[0] < a2[0] ? a1.splice(0, 1) : a2.splice(0, 1);
        newArr.push(...nextVal);
    }

    newArr = newArr.concat(a1, a2);

    return newArr;
}

module.exports = mergeArrays;
