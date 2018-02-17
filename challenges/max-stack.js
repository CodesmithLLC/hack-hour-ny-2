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
  this.store = {};
  this.length = 0;
  this.maxVal = null;
}

Stack.prototype.push = (num) => {
  this.store[this.length] = num;
  if (this.maxVal && num > this.maxVal) {
    this.maxVal = num;
  } else if (!this.maxVal) {
    this.maxVal = num;
  }
  this.length++;
  return this.length;
}

Stack.prototype.pop = () => {
  let popped = this.store[this.length-1];
  delete this.store[this.length-1];
  this.length--;
  // somehow find the maxval if it was just deleted..
  return popped;
}

Stack.prototype.getMax = () => {
  // iterate through the store and find the largest num :(
  // orrrr return maxVal
  if (!this.maxVal) {
    for (let key in this.store) {
      if (!this.maxVal) {
        this.maxVal = this.store[key];
      } else if (this.store[key] > this.maxVal) {
        this.maxVal = this.store[key];
      }
    }
  }
  return this.maxVal;
}
module.exports = Stack;
