/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.storage = {};
  this.index = 0
}

Stack.prototype.push = function(value) {
  this.storage[this.index] = value,
  this.index++
  return Object.keys(this.storage).length;
}

Stack.prototype.pop = function(value) {
  if (this.index === 0) return undefined;
  let lastVal = this.storage[this.index - 1];
  if (this.index > 0) this.index--;
  return lastVal;
}

Stack.prototype.getMax = function(value) {
  let maxVal = 0;
  for (let key in this.storage) {
    if (this.storage[key] > maxVal) maxVal = this.storage[key];
  }
  return maxVal;
}

let arr = new Stack();

module.exports = Stack;
