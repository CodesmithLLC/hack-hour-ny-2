/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
	this.storage = [1,2,3]; 
	// this.index = 0; 
	// not adding push / pop / etc methods. Not sure how stacks are being populated so adding dummy data for now. 
}


/**
* Queue Class
*/


function Queue() {
	let combinedQue;
	let queue1 = new Stack()
	let queue2 = new Stack()

	combinedQue = queue1.storage.concact(queue2.storage);
	return combinedQue; 

}

module.exports = {Stack: Stack, Queue: Queue};
