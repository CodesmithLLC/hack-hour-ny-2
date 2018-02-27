/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
	this.length = 0;
	this.storage = [];
}

Stack.prototype.push(val) {
	this.storage[this.length] = val;
	this.length++;
}

Stack.prototype.pop() {
	this.storage[this.length--];
}


/**
* Queue Class
*/


function Queue() {
	this.in = Stack();
	this.out = Stack();
}

Queue.prototype.que(val) {
	Queue.in.push(val);
}

Queue.prototype.deQue() {
	if(Queue.out.length === 0){
		while(Queue.in.length !== 0){
			Queue.out.push(Queue.in.pop())
		} 
	}
	return Queue.out.pop();
}


module.exports = {Stack: Stack, Queue: Queue};
