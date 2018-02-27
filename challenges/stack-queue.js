/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.storage = {};
  this.index = 0;
}

Stack.prototype.push = function(value) {
  this.storage[this.index++] = value;
  return this.storage.length;
}

Stack.prototype.pop = function() {
  let val = this.storage[this.index - 1];
  delete this.storage[this.index - 1];
  this.index--;
  return val;
}


/**
* Queue Class
*/


function Queue() {
  this.stack1 = new Stack();
  this.stack2 = new Stack();
}

Queue.prototype.push = function(val) {
  while(Object.keys(this.stack2.storage).length) {
    this.stack1.push(this.stack2.pop())
  }
  this.stack1.push(val);
  return this.stack1.storage;
}

Queue.prototype.shift = function() {
  while(Object.keys(this.stack1.storage).length) {
    this.stack2.push(this.stack1.pop())
  }
  this.stack2.pop();
  return this.stack2.storage;
}

module.exports = {Stack: Stack, Queue: Queue};
