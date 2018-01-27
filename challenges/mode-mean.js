/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */


function modemean(array) {
	// determine length of array
	let arrLength = array.length;
	// sum all numbers in array
	let sum = array.reduce((acc, num) => {
		return acc + num;
	}, 0);

	// divide by length 
	// pass output number to Math.floor to get an integer
	let mean = Math.floor(sum/arrLength);

	// store each num in an object, with key as num and value as frequency 
	let cache = array.reduce((obj, num) => {
		if (obj[num]) obj[num]++;
		else obj[num] = 1;
		return obj;
	}, {})

	// determine num with the highest frequency
	// if two nums have the same frequency, save the num that's greater
	let mode = Object.keys(cache).reduce((acc, num) => {
		if (cache[acc] < cache[num]) return num;
		if (cache[acc] === cache[num] && num > acc) return num;
		else return acc;
	});

	// compare mean and mode
	return Number.parseInt(mode) === mean;
}

module.exports = modemean;
