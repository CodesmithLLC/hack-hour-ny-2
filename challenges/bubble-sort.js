// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  for (let i = 0; i < array.length; i += 1) {
    for (j = 0; j < array.length - i; j += 1) {  
      if (array[j + 1] <= array[j]) { 
        temp = array[j];
        array[j] = array[j + 1]
        array[j + 1] = temp 
      }
    }
  }
  return array
}

module.exports = bubbleSort;
