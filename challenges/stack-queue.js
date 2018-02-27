/**
 * Create a stack.Then create a queue using two stacks.
 */

// A data structure that serves as a collection of elements, with two principle operations: push and pop. Push adds an element to the collection. Pop removes the last element that was added. This data structure follows the "Last In, First Out" principle (LIFO), where the elements that were most recently pushed (added) to the stack, are popped off (removed) first.

function Stack() {
  this.storage = {};
  this.length = 0;

  this.push = function(value) {
    this.storage[this.length] = value;
    this.length++;
  }

  this.pop = () => {
    if (this.length === 0) return undefined;
    const last = this.storage[this.length-1];
    delete this.storage[this.length-1];
    this.length--;
    return last; 
  }
}

let myStack = new Stack();

myStack.push(3)
myStack.push(4)
myStack.push(5)
myStack.pop()

console.log(myStack)


/**
* Queue Class
*/

// A data strucure that serves as a collection of elements that preserves the order at which the elements are inserted. The principle operations are enqueue, which adds an element to the collection, and dequeue, which removes the element that was added the earliest. This data structure follows the "First In, First Out" principle (FIFO), where elements that are enqueued (added) into the queue first, are dequeue (removed) first.

function Queue() {
  this.storage = {};
  this.index = 0; // same as size/length

  this.enqueue = (value) => {
    // move every previous value up one index
    for(let i = this.index; i > 0; i--){
      this.storage[i] = this.storage[i-1];
    }
    this.storage[0] = value;
    this.index++;
  };

  this.dequeue = () => {
    if(this.index === 0) return undefined;
    const last = this.storage[this.index-1];
    delete this.storage[this.index-1];
    this.index--;
    return last;
  }

}

let myQueue = new Queue();
myQueue.enqueue(1)
myQueue.enqueue(2)
myQueue.enqueue(3)
myQueue.dequeue() // removes 1 

console.log(myQueue)

module.exports = {Stack: Stack, Queue: Queue};
