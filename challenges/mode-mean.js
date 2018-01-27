/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */


function modemean(array) {
  const counter = {};
  const arr = array;
  arr.sort();

  const sum = arr.reduce((a, b) => a + b);

  const mean = Math.floor(sum / arr.length);

  // loop through sorted array and compare index to nextIndex
  for (let i = 1; i < arr.length; i += 1) {
    // keep track of longest run with counter
    if (arr[i] === arr[i - 1]) {
      if (!counter[arr[i]]) counter[arr[i]] = 1;
      else counter[arr[i]] += 1;
    }
  }
  // get keys
  const entries = Object.entries(counter);

  mergeSortNested(entries);

  const mode = counter[entries[0][0]];

  if (mean === mode) return true
  return false;
}


function mergeSortNested(array) {
  if(array.length === 1) return array;
  const result = [];
  const arr1 = mergeSort(array.slice(0, array.length/2));
  const arr2 = mergeSort(array.slice(array.length/2));
  while (arr1.length > 0 && arr2.length > 0) {
    if (arr1[0][1] > arr2[0][1]) result.push(arr2.shift());
    else result.push(arr1.shift());
  }
  if (arr1.length > 0) result.push(arr1.shift());
  if (arr2.length > 0) result.push(arr2.shift());
  const flatArr = [].concat(...result);
  return flatArr;
}

module.exports = modemean;
