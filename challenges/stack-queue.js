/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.content = [];
  this.length = 0;
}
Stack.protoType.push = function(val) {
  this.length++;
  return this.content.push(val);
}
Stack.protoType.pop = function() {
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

Queue.protoType.enquene = function(val) {
  this.stack1.push(val);
}

Queue.protoType.dequene = function() {
  if (this.stack2.length > 0) return this.stack2.pop();
  for (let i=0; i<this.stack1.length; i++) {
    const val = this.stack1.pop();
    this.stack2.push(val);
  }
  return this.stack2.pop();
}


module.exports = {Stack: Stack, Queue: Queue};
