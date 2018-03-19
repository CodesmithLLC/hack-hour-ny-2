/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

let allPos = [1,2,4,10,5];
let allNeg = [-1, -2, -4, -10, -5];
let twoNeg = [1, 2, 4, -10, -5];
// console.log(highestProduct(allPos));
// console.log(highestProduct(allNeg));
// console.log(highestProduct(twoNeg));

function highestProduct(array) {
    if (!Array.isArray(array)) return 0;
    if (array.length < 3) return 0;

    let len = array.length;
    let arr = array.sort((a, b) => b - a);
    let positive = arr[0] * arr[1] * arr[2];
    let negative = arr[len - 1] * arr[len - 2] * arr[0];

    if (negative > positive) return negative;
    return positive;
}


module.exports = highestProduct;
