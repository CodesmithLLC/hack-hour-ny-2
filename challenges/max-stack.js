/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
	this.contents = {}; 
	this.length = 0; 

	this.push = (n) => {
		stack[this.length] = n; 
		this.length ++ 
		return this.length; 
	};

	this.pop = () => {
		let number = stack[stack.i];
		delete stack[stack.i]; 
		stack.i--;
		return number; 
	}

	this.getMax = () => {
		// need to push in sorted order to find max in constant time?
		let largestNum = 0; 
		for(let key in stack){
			if(stack[key] > largestNum)
				largestNum = stack[key]
		}
		return largestNum
	}


	let stack = {}
	stack.prototype.i = 0; 

	stack.prototype.push = (n) => {
		stack[stack.i] = n; 
		let keyList = stack.keys(); 
		stack.i++; 
		return keyList.length; 
	}

	stack.prototype.pop = () => {
		let number = stack[stack.i];
		delete stack[stack.i]; 
		stack.i--;
		return number; 
	}

	stack.prototype.getMax = () => {
		// need to push in sorted order to find max in constant time?
		let largestNum = 0; 
		for(let key in stack){
			if(stack[key] > largestNum)
				largestNum = stack[key]
		}
		return largestNum
	}
}

module.exports = Stack;