// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  if (!array || !array.length) return 'invalid';
  if (array.length === 1) return array;
  let left = 0;
  let right = 1;
  let swapped = true;

  while (swapped) {
    left = 0;
    right = 1;
    swapped = false;
    while (left < array.length) {
      if (array[left] > array[right]) {
        let temp = array[left];
        array[left] = array[right];
        array[right] = temp;
        swapped = true;
      }
      left++;
      right++;
    }
  }
  return array;
}

module.exports = bubbleSort;
