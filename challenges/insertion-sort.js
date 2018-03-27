// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  // let result = [];
  // if(array.length){
  //   result.push(array[0])
  // }

  for(let i = 1; i < array.length; i++){
    let j = i - 1;
    const temp = array[i];

    while(j > -1 && array[j] > temp){
      array[j + 1] = array[j]
      j--;
    }

    array[j + 1] = temp;
  }

  return array;
}

// const arr = [6, 5, 3, 1, 8, 7, 2, 4];
// console.log(insertionSort(arr));

module.exports = insertionSort;
