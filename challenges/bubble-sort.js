// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort

const arr = [1, 3, 2, 5, 0];
console.log(bubbleSort(arr));

function bubbleSort(array) {
  let swap = true;
  while (swap) {
    swap = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        swap = true;
        const temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
      }
    }
  }
  return array;
}

module.exports = bubbleSort;
