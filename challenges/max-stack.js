/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.storage = {};
  this.index = 0;
}

Stack.prototype.push = function(value) {
  this.index++;
  this.storage[this.index - 1] = value;
  return Object.keys(this.storage).length;
};

Stack.prototype.pop = function() {
  if(this.index === 0) return undefined;
  this.index--;
  let val = this.storage[this.index];
  delete this.storage[this.index];
  return val;  
};

Stack.prototype.getMax = function() {
  return Object.values(this.storage).reduce((acc, curr) => Math.max(acc, curr), 0);
};



module.exports = Stack;