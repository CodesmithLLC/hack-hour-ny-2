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
	let mode, mean; 
	let sum = 0; 
	let newModeObj = {};
	let greatest = 0;

	for(let i = 0; i < array.length; i++){ // array loop. Average assignment and object fill
		sum += array[i]; 
		if(newModeObj[array[i]]){
			newModeObj[array[i]]++; 
		} else {
		  newModeObj[array[i]] = 1; 
		}
	}	
	
	mean = sum / array.length;

	for(let counter in newModeObj){ //mode determination
		if(newModeObj[counter] > greatest){
		  greatest = newModeObj[counter]
		  mode = counter; 
		 }
		if(newModeObj[counter] === newModeObj[mode])
		  mode = Math.max(counter,mode)
	}
	
	if(mean === mode)
	  return true;
	return false; 
}

module.exports = modemean;
