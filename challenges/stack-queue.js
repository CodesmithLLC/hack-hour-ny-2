/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.length = 0,
  this.content = {}
}

Stack.prototype.push = function(val) {
  this.content[this.length++] = val;
  return this.length;
}

Stack.prototype.pop = function() {
  const temp = this.content[--this.length];
  delete this.content[this.length];
  return temp;
}

function Queue() {
  this.elIn = new Stack();
  this.elOut = new Stack();
}

Queue.prototype.enqueue = function(val) {
  this.elIn.push(val);
}

Queue.prototype.dequeue = function() {
  if (this.elOut.length === 0) {
    while (this.elIn.length > 0) {
      this.elOut.push(this.elIn.pop());
    }
  }
  return this.elOut.pop();
}

module.exports = { Stack, Queue };
