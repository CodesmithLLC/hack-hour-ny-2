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
	let mode = {};
	let mean = array.reduce((a, b) => { return a + b }) / array.length;
	
	for(let i = 0; i < array.length; i++){
	  !mode[array[i]] ? mode[array[i]] = 1 : mode[array[i]] += 1
	}
	
	let singleMode = Object.keys(mode).sort((a, b) => { return mode[b] - mode[a]})
	let firstMode = singleMode[0]
	let multipleModes = singleMode.filter((num) => { return mode[num] === mode[firstMode]})
	let max = multipleModes.sort((a, b) => {return Number(b) - Number(a)})[0]
	
	return Math.floor(mean) === Number(max)
}

module.exports = modemean;
