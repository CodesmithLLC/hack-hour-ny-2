/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  let stack = [];
  this.push = (e) => {
  	stack = stack.concat(e)
  	return stack.length;
  };
  this.pop = () => {
    let popped = stack.splice(-1);
  	return popped[0];
  }
  this.getMax = () => {
  	let max = stack[0];
  	for (let i = 1; i < stack.length; i++){
  		if (stack[i] > max) max = stack[i];
  	}
  	return max;
  }
}

// const STACK = new Stack();

// console.log(STACK.push(0)); 
// console.log(STACK.push(1)); 
// console.log(STACK.push(2)); 
// console.log(STACK.push(3)); 

// console.log(STACK.pop()); 

// console.log(STACK.getMax()); 
module.exports = Stack;