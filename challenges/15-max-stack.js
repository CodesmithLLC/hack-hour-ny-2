/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

 function Stack() {
   this.content = [];
   this.length = 0;
   this.max = null;
 }

 Stack.prototype.push = function(item) {
   this.content[this.length] = item;
   this.length++;
   if (this.max === null || this.max < item) {
     this.max = item;
   }
   return this.length;
 }

 Stack.prototype.pop = function() {
   if (this.length === 0) return undefined;
   const last = this.content[this.length-1];
   this.content[this.length-1] = undefined;
   this.length--;
   this.setNewMax();
   return last;
 }
Stack.prototype.setNewMax = function() {
  this.max = null;
  for (let i=0; i<this.length; i++) {
    if (this.max === null || this.max < this.content[i]) {
      this.max = this.content[i];
    }
  }
}

 Stack.prototype.getMax = function() {
   if (this.max === null) return undefined;
   return this.max;
 }
module.exports = Stack;