// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      if (array[i] < array[j]) {
        let spliced = array.splice(i, 1);
        array.splice(j, 0, spliced[0]);
      }
    }
  }
  return array;
}

module.exports = insertionSort;