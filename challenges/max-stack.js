/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack(val) {
  this.storage = {};
  this.length = 0;
}

stack.prototype.push = function(val) {
  this.storage[this.length] = val;
  this.length += 1;
  return this.length;
}

stack.prototype.pop = function() {
  const output = this.storage[this.length - 1];
  delete this.storage[this.length - 1];
  this.length -= 1;
  return output;
}

stack.prototype.getMax = function() {
  let max = Number.NEGATIVE_INFINITY;
  for (let key in this.storage) {
    if (this.storage[key] > max) {
      max = this.storage[key];
    }
  }
  return max;
}

module.exports = Stack;