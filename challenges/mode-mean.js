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
 const mem = {};
 let total = 0;
 array.forEach((e)=>{
 	total += e;
 	if (mem[e]) mem[e]++;
 	else mem[e] = 1;
 })
 let avg =total/array.length;
 let numOfRepeats = 0; let mode;

 for (let prop in mem){
 	if (mem[prop] > numOfRepeats){
 		numOfRepeats = mem[prop];
 		mode = Number(prop);
 	}
 }
 console.log(avg, mode);
 return avg === mode;
}

//console.log(modemean([13, 13, 13, 13, 14, 14, 16, 18, 21]));
module.exports = modemean;
