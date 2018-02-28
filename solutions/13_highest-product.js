/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(arr) {
  if (!Array.isArray(arr) || arr.length < 3) return 0;
  if (arr.length === 3) return arr[0] * arr[1] * arr[2];
  const a1 = arr.filter((i) => { return i >= 0 });
  const a2 = arr.filter((i) => { return i < 0 });
  a1.sort((a, b) => { return b - a });
  a2.sort((a, b) => { return a - b });
  if (a2.length < 2 && a1.length >= 3) return a1[0] * a1[1] * a1[2];
  if (a2.length >= 2 && a1.length >= 3) return a1[0] * Math.max(a2[0] * a2[1], a1[1] * a1[2]);
  if (a1.length >= 1) return a1[0] * a2[0] * a2[1];
  const n2 = a2.length;
  return a2[n2 - 1] * a2[n2 - 2] * a2[n2 - 3];
}


module.exports = highestProduct;