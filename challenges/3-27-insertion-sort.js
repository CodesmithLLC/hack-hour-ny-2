// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  let buffer, j;
  for (let i = 1; i < array.length; i++) {
    j = i - 1;
    while (array[j] > array[j + 1]) {
      [array[j], array[j + 1]] = [array[j + 1], array[j]]
      j--;
    }
  }
  return array;
}

module.exports = insertionSort;