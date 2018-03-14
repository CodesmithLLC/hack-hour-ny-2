/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.stack = {};
  this.length = 0;
  this.max = 0;
}



Stack.prototype.push = function(value){
  this.stack[this.length] = value;
  this.max = (!this.length) ? value: Math.max(this.max, value)

  this.length++;
  return this.length;
}

Stack.prototype.pop = function(){
  this.length--;
  const temp = this.stack[this.length];
  delete this.stack[this.length];

  if(this.length === 0){
    this.max = null
  }
  else if(temp === this.max){
    this.max = this.stack[0];
    for(let i = 1; i < this.length; i++){
      this.max = Math.max(this.max, this.stack[i]);
    }
  }

  return temp;
}

Stack.prototype.getMax = function(){
  return this.max;
}

let stack = new Stack();
for(let i = 0; i < 5; i++){
  stack.push(Math.round(Math.random() * 100));
  console.log(stack.stack);
  console.log(stack.max);
  console.log("");
}

for(let i = 0; i < 5; i++){
  stack.pop();
  console.log(stack.stack);
  console.log(stack.max);
  console.log("");
}


module.exports = Stack;
