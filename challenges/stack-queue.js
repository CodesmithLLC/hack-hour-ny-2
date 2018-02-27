/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.content = [];
  this.length = 0;
}
Stack.prototype.push = function(val) {
  this.length++;
  return this.content.push(val);
}
Stack.prototype.pop = function() {
  if (this.length > 0) this.length--;
  return this.content.pop();
}

/**
* Queue Class
*/


function Queue() {
  this.stack1 = new Stack();
  this.stack2 = new Stack();
}

Queue.prototype.enqueue = function(val) {
  this.stack1.push(val);
}

Queue.prototype.dequeue = function() {
  if (this.stack2.length > 0) return this.stack2.pop();
  const n1 = this.stack1.length;
  for (let i=0; i<n1; i++) {
    const val = this.stack1.pop();
    this.stack2.push(val);
  }
  return this.stack2.pop();
}


module.exports = {Stack: Stack, Queue: Queue};
