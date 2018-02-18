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
  this.len = 0;
  this.maxVal = null;
}

Stack.prototype.push = function(num){
  this.store[this.len] = num;
  if (this.maxVal && num > this.maxVal) {
    this.maxVal = num;
  } else if (!this.maxVal) {
    this.maxVal = num;
  }
  this.len++;
  return this.len;
};

Stack.prototype.pop = function() {
  let popped = this.store[this.len-1];
  delete this.store[this.len-1];
  this.len--;
  // somehow find the maxval if it was just deleted..
  (popped === this.maxVal)? this.changeMax() : false;
  return popped;
};

Stack.prototype.changeMax = function() {
  // change the maxVal to the second highest maxVal
  let secondMax;
  for (let key in this.store) {
    if (!secondMax) {
      secondMax = this.store[key];
    } else if (this.store[key] < this.maxVal && this.store[key] > secondMax) {
      secondMax = this.store[key];
    }
  }
  this.maxVal = secondMax;
};

Stack.prototype.getMax = function() {
  // iterate through the stack and find the largest num :(
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
};

module.exports = Stack;
