/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
	
	let newValue = base;
	if(power === 1){
		return base; 
	}

	newValue *= pow(base,power-1)

	return newValue; 
}

module.exports = pow;
