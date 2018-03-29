// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let j = i;
    while (j > 0) {
      if (array[j] < array[j-1]) {
        let temp = array[j-1];
        array[j-1] = array[j];
        array[j] = temp;
      }
      j--
    }
  }
  return array;
}

module.exports = insertionSort;