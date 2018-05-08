/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {

 this.stack = [];

  this.Push = (e) => { 
    return this.stack.push(e);
  }

  this.Pop = () => {
    return this.stack.pop();
  }

  this.Reverse = () => {
  if (this.stack.length < 2) return this.stack;
  for (let i = this.stack.length-1; i >= 0; i--){
    this.stack.push(this.stack[i]);
  }
  return this.stack.splice(this.stack.length/2)
 }

}


/**
* Queue Class
*/


function Queue() {


}

module.exports = {Stack: Stack, Queue: Queue};
