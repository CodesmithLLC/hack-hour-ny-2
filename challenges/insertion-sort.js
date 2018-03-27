// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort

function insertionSort(array) {
	// start from 1st position. If 1st less than 1 before it, move it to the position before. 

	let j = 1; 
	let counter = j;
	
	for(let i = 1; i < array.length; i++){

		while(!array[j] > array[j-1]){ // simple counter to lowest index position
			counter-- 
		}

		if(counter < j){ // work for setting lowest value at correct position && saving the existing value
			let value = array[i];
			let storedValue = array[counter]
			array[counter] = value; 

			for(let k = counter; k < j; k++){ // for loop for resetting values 
				array[k+1] = storedValue
				let storedValue = array[k+1]
			}
		}

		j++ // incrementer for j and counter; 
		counter = j;

		}

		return array;
	}
}

module.exports = insertionSort;