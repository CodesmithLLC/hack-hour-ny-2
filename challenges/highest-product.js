/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    let len = array.length;
    let arr = array.sort((a, b) => b - a);
    let positive = arr[0] * arr[1];
    let negative = arr[len - 1] * arr[len - 2];

    if (!Array.isArray(array)) return 0;
    if (len < 3) return 0;
    if (negative > positive) return negative * arr[0];
    return arr[0] * arr[1] * arr[2];
}


module.exports = highestProduct;
