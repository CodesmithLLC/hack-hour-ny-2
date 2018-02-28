/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.storage = [];
  this.index = 0;
}

Stack.prototype.push = function(value) {
  this.storage[this.index] = value;
  this.index++;
}

stack.prototype.pop = function() {
  this.index--;
  const popped = this.storage[this.index];
  delete this.storage[this.index];
  return popped;
}


/**
* Queue Class
*/


function Queue() {
  // this.storage = new Stack();;
  // this.num = 0;
  // this.length = 0;
  this.stack1 = new Stack();
  this.stack2 = new Stack();
}



Queue.prototype.enQueue = function(val) {
  this.stack1.push(val);
  
}

Queue.prototype.deQueue = () => {

  while(!this.stack1.isEmpty()) {
    this.stack2.push(this.stack1.pop());
  }

  return this.stack2.pop();

}

module.exports = {Stack: Stack, Queue: Queue};

// testing
let q = new Queue();
// q.stack1 = new Stack();
// q.stack2 = new Stack();
enQueue(q, 1);
enQueue(q, 2);
enQueue(q, 3);
console.log(q);

deQueue(q);
deQueue(q);
deQueue(q);
