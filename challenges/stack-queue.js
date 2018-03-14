/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.stack = {};
  this.length = 0;
}

Stack.prototype.push = function(val){
  this.stack[this.length] = val;
  this.length++;
  return val;
}

Stack.prototype.pop = function(){
  if(!this.length){
    return;
  }
  this.length--;
  const deleted = this.stack[this.length]
  delete this.stack[this.length];
  return deleted;
}

/**
* Queue Class
*/


function Queue() {
  this.stackOne = new Stack();
  this.stackTwo = new Stack();
  this.length = 0;
}

Queue.prototype.enqueue = function(val){
  while(this.stackTwo.length){
    const popped = this.stackTwo.pop();
    this.stackOne.push(popped);
  }
  this.length++;
  this.stackOne.push(val);
  return this.length;
}

Queue.prototype.dequeue = function(){
  while(this.stackOne.length){
    const popped = this.stackOne.pop();
    this.stackTwo.push(popped);
  }
  this.length--;
  return this.stackTwo.pop();
}

// let stack = new Stack();
// for(let i = 0; i < 5; i++){
//   stack.push(i);
// }
//
// stack.pop();
// console.log(JSON.stringify(stack, null, 4))

// let queue = new Queue();
// for(let i = 0; i < 5; i++){
//   queue.enqueue(i);
// }
//
// queue.dequeue();
// queue.enqueue(10);
// queue.pop();
// console.log(JSON.stringify(queue, null, 4))

module.exports = {Stack: Stack, Queue: Queue};
