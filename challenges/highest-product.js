/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    let arr = array.sort((a,b)=>b-a);
    if(arr.length === 0) return 0;
    if(arr.length === 1) return arr[0];
    if(arr.length === 2) return arr[0] * arr[1];
    return arr[0]*arr[1]*arr[2];
}


module.exports = highestProduct;
