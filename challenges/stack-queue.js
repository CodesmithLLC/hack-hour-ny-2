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
    return this.stack.splice(0,1);
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
    this.primary = new Stack();
    this.temp = new Stack();
    this.nextVal = undefined;
}

Queue.prototype.length = function() {
    return this.primary.length() + this.temp.length() + (!!this.nextVal);
}

Queue.prototype.push = function(val) {
    if(!this.length()) this.nextVal = val;
    if(!this.temp) this.primary.push(val);
    return this.length();
}

Queue.prototype.pop = function() {
    let temp = this.nextVal;

    if(this.length() > 1) {
        while(this.primary.length > 1) {
            let moveVal = this.primary.pop();
            this.temp.push(moveVal);
        }

        this.nextVal = this.primary.pop()

        while(this.temp.length > 1) {
            let moveVal = this.temp.pop();
            this.primary.push(moveVal);
        }
    }

    return temp;
}

module.exports = {Stack: Stack, Queue: Queue};
