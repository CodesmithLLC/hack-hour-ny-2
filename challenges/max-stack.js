/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */


// Linear time

  function LStack() {
    this.stack = [];
    this.length = 0;
  }

  LStack.prototype.push = (val) => {
    this.stack[this.length] = val;
    return ++this.length;
  }

  LStack.prototype.pop = () => {
    if (this.length === 0) return undefined;
    let temp = this.stack[--this.length];
    delete this.stack[this.length];
    return temp;
  }

  LStack.prototype.getMax = () => {
    if (this.length === 0) return undefined;
    let max = null;
    this.stack.forEach((num) => {
      if (max === null || max < num) max = num;
    });
    return max;
  }



////////////////////////////////////////////////
  /** Now let's do it in constant time **/

  function CStack() {
    this.stack = [];
   	this.maxStack = [];
  }

  CStack.prototype.push = function(value) {
  	this.stack.push(value);
  	// if maxStack is empty or if the value is greater than the max so far,
  	// let's push the value, otherwise, our last max is still our max at the new index
  	let max = (!this.maxStack.length || value > this.maxStack[this.maxStack.length - 1]) ? value : this.maxStack[this.maxStack.length - 1];

  	return this.maxStack.push(max);
  }

  CStack.prototype.pop = function() {
  	this.maxStack.pop();
  	return this.stack.pop();
  }

  CStack.prototype.getMax = function() {
  	return this.maxStack[this.maxStack.length - 1];
  }

  let newStack = new CStack();
  newStack.push(6)
  newStack.push(10)
  newStack.push(12)
  newStack.push(8)
  newStack.push(7)
  newStack.getMax();



module.exports = Stack;
