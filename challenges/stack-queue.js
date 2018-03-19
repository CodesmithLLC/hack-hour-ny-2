/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
    this.stack = [];
}

Stack.prototype.push = function(val) {
    this.stack.splice(0,0,val);
    return this.stack.length;
}

Stack.prototype.pop = function() {
    if(!this.stack.length) return undefined;
    let temp = this.stack.splice(0, 1)
    return temp[0];
}

Stack.prototype.getStack = function() {
    return this.stack
}

Stack.prototype.length = function() {
    return this.stack.length;
}

/**
* Queue Class
*/


function Queue(stack) {
    this.inbox = new Stack();
    this.outbox = new Stack();
}

Queue.prototype.enqueue = function(val) {
  this.inbox.push(val);
  return this.inbox.length + this.outbox.length;
}

Queue.prototype.dequeue = function() {
  if(this.outbox.length) return this.outbox.pop();
  if(this.inbox.length === 1) return this.inbox.pop();

  while(this.inbox.length) {
    this.outbox.push(this.inbox.pop());
  }

  return this.outbox.pop();
}

module.exports = {Stack: Stack, Queue: Queue};
