/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

 /*
  * Create a stack with the push, pop, and getMax methods.
  * push should return the new length of the stack.
  * pop should return the element that was just removed.
  * getMax should return the largest value currently in the stack.
  * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
  */

 function Stack() {
   this.contents = {};
   this.length = 0;
   this.max = Stack[0];
 }

 Stack.prototype.push = function (val) {
     // Place the new value into the
     // next available key (index.length)
     this.contents[this.length] = val;

     // Update the length property
     this.length++;

     // if this is first val, set this to be max
     if (this.length === 1) {
       this.max = val;
     }
     // reset max if this val is greater than max
     if (val > this.max) {
       this.max = val;
     }
     // Return the updated length
     return this.length;
 }

 Stack.prototype.pop = function (val) {
   let index = this.length;
   let output = this.contents[index-1];
   delete this.contents[index-1];
   this.length--;
   return output;
 }

 Stack.prototype.getMax = function () {
   return this.max;
 }


 var stack = new Stack;

 stack.push(2)
 stack.push(6)
 stack.push(3)
 stack.push(9)
 stack.pop()
 console.log(stack)  // ERROR: Max still remains even after value popped. How to fix???


module.exports = Stack;
