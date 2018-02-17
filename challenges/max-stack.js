/*
 * Create a stack with the push, pop, and getMax methods.
 * *****push should return the new length****** of the stack.
 * *****pop should return the element***** that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 ****the stack should be sorted? and retrieve the last item??? nah, just hold the largest val
 in the stack in a separate variable !
 */

function Stack() {
  // body...
  this.stack = {};
  this.length = 0;
  this.maxVal;
}

Stack.prototype.push = (num) => {
  this.stack[this.length] = num;
  if (this.maxVal && num > this.maxVal) {
    this.maxVal = num;
  } if (!this.maxVal) {
    this.maxVal = num;
  }
  this.length++;
  return this.length;
}

Stack.prototype.pop = () => {
  let popped = this.stack[this.length-1];
  delete this.stack[this.length-1];
  this.length--;
  // somehow find the maxval if it was just deleted..
  return popped;
}

Stack.prototype.getMax = () => {
  // iterate through the stack and find the largest num :(
  // orrrr return maxVal
  if (!this.maxVal) {
    for (let key in this.stack) {
      if (!this.maxVal) {
        this.maxVal = this.stack[key];
      } else if (this.stack[key] > this.maxVal) {
        this.maxVal = this.stack[key];
      }
    }
  }
  return this.maxVal;
}
module.exports = Stack;
