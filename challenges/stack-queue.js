/**
 * Create a stack.Then create a queue using two stacks.
 */

function Stack() {
	this.storage = {};
	this.index = 0;
}

Stack.prototype.push = function(value) {
	this.storage[this.index++] = value
	return value;
};

Stack.prototype.pop = function() {
	const last = this.storage[this.storage.length - 1];
	const stack = this.storage;
	//console.log(stack)

	const storageUpdate = Object.keys(stack).reduce((obj, key, index, array) => {
		console.log('key', key)
		console.log('index', index)
		//console.log(obj)
		if (array.length < index - 1) {
			console.log('test')
			//console.log(stack[index])
			obj[index] = stack[index];
			//console.log(obj[index])
			return obj;
		}
	}, {})

	//console.log(storageUpdate)
	
	if (this.index > 0) {
		this.index--
	}

	return last;
};


/**
* Queue Class
*/


function Queue() {
	this.storage = [];
}

Queue.prototype.enQueue = function(q, x) {
	//   1) Push x to stack1 (assuming size of stacks is unlimited).
	stack1.push(x);
}
	

	// deQueue(q)
	//   1) If both stacks are empty then error.
	//   2) If stack2 is empty
	//        While stack1 is not empty, push everything from stack1 to stack2.
	//   3) Pop the element from stack2 and return it.
const stack1 = new Stack;
const stack2 = new Stack;

console.log(stack1.push('a'));
console.log(stack1.push('b'));
console.log(stack1.push('c'));
console.log(stack1.pop());


module.exports = {Stack: Stack, Queue: Queue};
