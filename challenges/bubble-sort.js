// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {

	if (array.length < 2) return array;

	for (let i = 0; i < array.length; i++){
		for (let j = 0; j < array.length-i; j++){
			if (array[j] > array[j+1]){
				let temp = array[j];
				array[j] = array[j+1];
				array[j+1] = temp;
			}
		}
	}
	return array;
}

console.log(bubbleSort([5,4,8,2,9,1,100,-3,1]))

module.exports = bubbleSort;
