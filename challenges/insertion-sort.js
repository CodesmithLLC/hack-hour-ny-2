// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort

// Sorting is typically done in-place, by iterating up the array, growing the sorted list behind it. At each array-position, it checks the value there against the largest value in the sorted list (which happens to be next to it, in the previous array-position checked). If larger, it leaves the element in place and moves to the next. If smaller, it finds the correct position within the sorted list, shifts all the larger values up to make a space, and inserts into that correct position.

    // if current val is less than anything previous...move toward front until it is no longer less than temp, or is at pos 0 

function insertionSort(array) {

  for(let i = 0; i < array.length; i++) {
    let temp = array[i];
    let j = i - 1; 
    
    while (j > 0 && temp < array[j]) {
      array[j+1] = array[j];  // swap 
      j--; // move back 
    }
    array[j+1] = temp
  }
  return array
}


insertionSort([0,2,1,4,6,5,3])

module.exports = insertionSort;