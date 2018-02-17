/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  this.length = 0;
  this.contents = {};
}

Stack.prototype.push = function(input) {
  this.contents[this.length] = input;
  return ++this.length;
}

Stack.prototype.pop = function() {
  if (this.length > 0) return this.contents[--this.length];
}

Stack.prototype.getMax = function() {
  let maxVal = this.contents[0];
  for (let i = 1; i < this.length; i++) {
    if (this.contents[i] > maxVal) maxVal = this.contents[i];
  }
  return maxVal;
}

module.exports = Stack;
