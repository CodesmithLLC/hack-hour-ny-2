/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  this.storage = {};
  this.index = 0;
  this.maxIndex = 0;
}

Stack.prototype.push = function(value) {
  this.storage[this.index] = value;
  if(this.index > 0) {
    if(value > this.storage[this.maxIndex]) {
      this.maxIndex = this.index;
    }
  }
  this.index++;
  return index;
}

Stack.prototype.pop = function() {
  this.index--;
  // let pos = index - 1;
  const poppedVar = this.storage[index];
  delete this.storage[this.index];
  return poppedVar;
}

Stack.prototype.getMax = function() {
  let max = this.storage[0];
  for(let i = 0; i < this.index; i++) {
    if(this.storage[i] > max) max = this.storage[i];
  }
  return max;
  // return this.maxIndex;
}

module.exports = Stack;