/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.storage = {},
  this.index = 0
}

Stack.prototype.push = function(val) {
  this.storage[this.index] = val;
  this.index++;
}

Stack.prototype.pop = function() {
  if (this.index === 0) {
    return undefined;
  }
  let lastVal = this.storage[this.index - 1];
  if (this.index > 0) {
    this.index--;
  }
  return lastVal;
}

/**
* Queue Class
*/


function Queue() {
  this.storage = {},
  this.index = 0
}

Queue.prototype.enqueue = function(value) {
  this.storage[this.index] = 0,
  this.index++
}

Queue.prototype.dequeue = function(value) {
  if (this.index === 0) {
    return undefined
  }
  let firstVal = this.storage[0];
  delete this.storage[0];
  this.index--;
  for (let i = 0; i < this.index; i++) {
    this.storage[i] = this.storage[i+1];
    delete this.storage[i+1]
  }
}
module.exports = {Stack: Stack, Queue: Queue};
