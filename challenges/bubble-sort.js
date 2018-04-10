// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



// function bubbleSort(array) {
//   function bubbleSort(array) {
//     let isSorted = false;
//     let buffer;
//     while (!isSorted) {
//       isSorted = true;
//       for (let i = 0; i < array.length - 1; i++) {
//         if (array[i] > array[i + 1]) {
//           buffer = array[i];
//           array[i] = array[i + 1];
//           array[i + 1] = buffer;
//           isSorted = false;
//         }
//       }
//     }
//     return array;
//   }
// }

function bubbleSort(array) {
  let done = false;

  while (!done) {
    done = true;

    for (let i = 0; i < array.length - 1; i++) {
      if (array[i + 1] < array[i]) {
        const temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        done = false;
      }
    }
  }

  return array;
}

console.log(bubbleSort([3, 1, 4, 5, 8, 6, 2, 7]))

module.exports = bubbleSort;
