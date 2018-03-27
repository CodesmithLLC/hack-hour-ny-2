// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
	let i = 1;
	while(i < array.length){
		let x = array[i]
		let j = i - 1;
		while(j >= 0 && array[j] > x){
			array[j+1] = array[j];
			j--;
		}
		array[j+1] = x
		i++
	}
	return array;
}

console.log(insertionSort([6,1,4,9,3,56,4,3]))

module.exports = insertionSort;