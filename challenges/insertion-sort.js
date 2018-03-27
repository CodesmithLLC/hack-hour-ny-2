// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  let i = 0;
  while(i < array.length) {
    let j = i - 1;
    while (j >= 0) {
      if (array[i] >= array[j]) {
        array.splice(j + 1, 0, array.splice(i, 1)[0]);
        break;
      }
      if (j === 0 && array[i] < array[j]) {
        array.unshift(array.splice(i, 1)[0]);
      }
      j--;
    }
    i++;
  }
  return array;
}

module.exports = insertionSort;