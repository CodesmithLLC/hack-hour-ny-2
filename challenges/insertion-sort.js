// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  let result = [array[0]];

  for(let i = 1; i < arr.length; i++){
    let j = result.length - 1;
    result.push(null);

    while(j > -1 && result[j] > arr[i]){
      result[j + 1] = result[j]
      j--;
    }

    result[j + 1] = arr[i];
  }

  array = result;
  return result;
}

// const arr = [6, 5, 3, 1, 8, 7, 2, 4];
// console.log(insertionSort(arr));

module.exports = insertionSort;
